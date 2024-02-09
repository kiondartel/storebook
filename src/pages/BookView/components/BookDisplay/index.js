import React from "react";
import { BookDisplay, BookImage, ImageContainer } from "./styles.js";
import BookIcons from "../BookIcons/index.js";
class BookDisplayComponent extends React.Component {
  render() {
    const { book } = this.props;

    return (
      <BookDisplay>
        <ImageContainer>
          <BookImage src={book.cover} alt={book.name} />
        </ImageContainer>
        <BookIcons />
      </BookDisplay>
    );
  }
}

export default BookDisplayComponent;
