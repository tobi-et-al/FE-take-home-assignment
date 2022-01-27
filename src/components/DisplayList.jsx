import React from "react";

const DisplayList = (props) => {
  return (
    <>
      {props.data.length ? (
        props.data.map((item, k) => {
          return (
            <img
              key={k}
              src={item.images.preview_gif.url}
              width={
                item.images.preview_gif.size > 120
                  ? 120
                  : item.images.preview_gif.size
              }
              className="rounded float-left"
              alt={item.title}
            />
          );
        })
      ) : (
        <p>Nothing Found :(</p>
      )}
    </>
  );
};

export default DisplayList;
