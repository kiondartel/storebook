import React from "react";
import { FaHeart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import {
  BookDescription,
  DescriptionText,
  BookHeaderQuery,
  FavoriteContainer,
} from "./styles.js";
import AboutDescription from "../AuthorDescription/index.js";

class BookDescriptionComponent extends React.Component {
  renderDescription(description) {
    const sentences = description
      .split(".")
      .map((s) => s.trim())
      .filter(Boolean);

    const groupedSentences = [];
    for (let i = 0; i < sentences.length; i += 4) {
      groupedSentences.push(sentences.slice(i, i + 4).join(". "));
    }

    return groupedSentences.map((paragraph, index) => (
      <DescriptionText key={index}>{paragraph}.</DescriptionText>
    ));
  }

  render() {
    const { book } = this.props;
    return (
      <BookDescription>
        <BookHeaderQuery>
          <FavoriteContainer>
            {book.isFavorite ? (
              <FaHeart size={26} color="red" />
            ) : (
              <AiOutlineHeart size={26} />
            )}
          </FavoriteContainer>
          <h1>{book.name}</h1>
          <p>{book.author.name}</p>
        </BookHeaderQuery>
        <DescriptionText>
          {this.renderDescription(book.description)}
        </DescriptionText>
        <AboutDescription />
      </BookDescription>
    );
  }
}

export default BookDescriptionComponent;
