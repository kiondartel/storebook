import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  BookViewContainer,
  BookContent,
  WhiteContainer,
  BookImageQuery,
  BackIcon,
} from "./styles.js";
import { fetchAllBooks } from "../../../../store/actions/libraryDisplay_helpers.js";
import BookHeaderComponent from "../BookHeader/index.js";
import BookDisplayComponent from "../BookDisplay/index.js";
import BookDescriptionComponent from "../BookDescription/index.js";
import Loader from "../../../../components/LoadingSpinner/index.js";
class BookDetails extends React.Component {
  componentDidMount() {
    this.props.fetchAllBooks();
  }

  render() {
    const { bookId, allBooks } = this.props;
    if (allBooks.loadingAllBooks) return <Loader />;
    const filteredBookById = allBooks.data.filter(
      (books) => books.id === bookId
    );

    if (filteredBookById)
      return (
        <BookViewContainer>
          {filteredBookById.map((book) => (
            <BookContent key={book.id}>
              <BookImageQuery back={book.cover} alt={book.name} />
              <Link to="/">
                <BackIcon />
              </Link>
              <BookHeaderComponent book={book} />
              <WhiteContainer>
                <BookDisplayComponent book={book} />
                <BookDescriptionComponent book={book} />
              </WhiteContainer>
            </BookContent>
          ))}
        </BookViewContainer>
      );
  }
}

const mapStateToProps = (state) => ({
  allBooks: state.allBooks,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllBooks: () => dispatch(fetchAllBooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
