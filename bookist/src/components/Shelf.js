import React from "react";

function Shelf(props) {
  let mappedTitles = props.shelf.map((element, index) => {
    return <p key={index}>books: {element}</p>;
  });
  return (
    <div>
      {mappedTitles}
      <button
        onClick={() => {
          props.clearShelf();
        }}
      >
        Clear Shelf
      </button>
    </div>
  );
}

export default Shelf;
