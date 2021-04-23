import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import BookList from "./components/BookList";
import Shelf from "./components/Shelf";
import SearchBar from "./components/SearchBar";

import data from "./data";

class App extends Component {
  constructor() {
    super();

    this.state = {
      shelf: [],
      books: data,
    };

    this.addToShelf = this.addToShelf.bind(this);
    this.clearShelf = this.clearShelf.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
    this.reset = this.reset.bind(this);
  }

  addToShelf = (bookToAdd) => {
    console.log(bookToAdd);
    let shelfAdd = [...this.state.shelf, bookToAdd];
    this.setState({ shelf: shelfAdd });
  };

  clearShelf() {
    this.setState({ shelf: [] });
  }

  filterBooks(input) {
    let filteredBooks = this.state.books.filter(function (element) {
      return (
        element.title.toLowerCase().includes(input) ||
        element.author.toLowerCase().includes(input)
      );
    });
    this.setState({ books: filteredBooks });
  }

  reset() {
    this.setState({ books: data });
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar filterBooks={this.filterBooks} reset={this.reset} />
        <div className="navItems">
          <p>Book List</p>
          <p>Shelf</p>
        </div>
        <BookList books={this.state.books} addToShelf={this.addToShelf} />
        <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf} />
      </div>
    );
  }
}

export default App;
