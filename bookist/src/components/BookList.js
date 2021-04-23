import React from "react";

function BookList(props) {
  let mappedBooks = props.books.map((element, index) => {
    return (
      <div key={index} className="bookItem">
        <img
          className="bookImg"
          src={
            element.clickable
              ? element.img
              : "https://yt3.ggpht.com/ytc/AAUvwnhzo6bPh3Q2TJ08VfoymsD5qSzXBKF5fbeF6E-4iw=s900-c-k-c0x00ffffff-no-rj"
          }
          onClick={() => {
            element.clickable && props.addToShelf(element.title);
          }}
        />
        <p className="bookInfo">{element.title}</p>
        <p className="bookInfo">{element.author}</p>
      </div>
    );
  });
  return <div className="bookList">{mappedBooks}</div>;
}

export default BookList;
