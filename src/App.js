import "./App.css";
import React from 'react';
import { useState, useEffect } from "react";
import DisplayList from "./components/DisplayList";

export default function App() {
  let [list, setList] = useState([]);
  let [errorMsg, setErrorMsg] = useState(null);

  const fetchData = async () => {
    const searchString = "random";
    const url = `${process.env.REACT_APP_GIPHY_SEARCH_URL}?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${searchString}&limit=25&offset=0&rating=g&lang=en`;
    let result = null;
    try {
      result = await fetch(url);
    } catch (e) {
      setErrorMsg(`Error pulling data, ${e.message}. Please try again later`);
      return [];
    }

    if (result.ok) {
      return result.json();
    }
    setErrorMsg(`Error pulling data, Please try again later`);
    return [];
  };

  useEffect(async () => {
    list = await fetchData();
    setList(list.data);
  }, []);

  return (
    <div className="App">
      <div className="d-flex flex-wrap justify-content-start">
        <div className="col-sm-6 offset-3">
          {errorMsg && <p className="text-error">{errorMsg}</p>}
          {<DisplayList data={list}></DisplayList>}
        </div>
      </div>
    </div>
  );
}
