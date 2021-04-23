import React from "react";

function Shelf(props) {
  let mappedTitles = props.shelf.map((element, index) => {
    return <p key={index}>{element}</p>;
  });
  let isEmpty = props.isEmpty;
  function Empty() {
    if (isEmpty) {
      return "Click on a book to add it to shelf";
    } else {
      return null;
    }
  }
  return (
    <div className="shelfBooks">
      <div className="navTitles">
        <h2>Your Shelf</h2>
      </div>
      <div className="clearShelf">
        <button
          className="btnShelf"
          onClick={() => {
            props.clearShelf();
          }}
        >
          Clear Shelf
        </button>
      </div>
      <div className="mapTitles">
        {mappedTitles.length > 0
          ? mappedTitles
          : "Click on a book to add to shelf."}
      </div>
    </div>
  );
}

export default Shelf;
