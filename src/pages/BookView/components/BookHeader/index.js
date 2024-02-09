import { BookHeader } from "./styles.js";
import React from "react";

class BookHeaderComponent extends React.Component {
  render() {
    const { book } = this.props;
    return (
      <BookHeader>
        <h1>{book.name}</h1>
        <p>{book.author.name}</p>
      </BookHeader>
    );
  }
}

export default BookHeaderComponent;
