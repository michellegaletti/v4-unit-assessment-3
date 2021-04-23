import React from "react";

function BookList(props) {
  let mappedBooks = props.books.map((element, index) => {
    return (
      <div key={index}>
        <img
          src={element.img}
          onClick={() => {
            props.addToShelf(element.title);
          }}
        />
        <p>{element.title}</p>
        <p>{element.author}</p>
      </div>
    );
  });
  return <div>{mappedBooks}</div>;
}

export default BookList;
