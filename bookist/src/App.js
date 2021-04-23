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
      books: data.map((element) => ({ ...element, clickable: true })),
    };

    this.addToShelf = this.addToShelf.bind(this);
    this.clearShelf = this.clearShelf.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
    this.reset = this.reset.bind(this);
  }

  addToShelf = (bookToAdd) => {
    let shelfAdd = [...this.state.shelf, bookToAdd];
    let newBooks = this.state.books.map((element) =>
      element.title === bookToAdd ? { ...element, clickable: false } : element
    );
    this.setState({ shelf: shelfAdd, books: newBooks });
  };

  clearShelf() {
    let bookArray = this.state.books.map((element) => ({
      ...element,
      clickable: true,
    }));
    this.setState({ shelf: [], books: bookArray });
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
    this.setState({
      books: data.map((element) => ({ ...element, clickable: true })),
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <SearchBar filterBooks={this.filterBooks} reset={this.reset} />
        <div className="navItems">
          <BookList books={this.state.books} addToShelf={this.addToShelf} />
          <Shelf
            shelf={this.state.shelf}
            clearShelf={this.clearShelf}
            isEmpty={this.isEmpty}
          />
        </div>
      </div>
    );
  }
}

export default App;
