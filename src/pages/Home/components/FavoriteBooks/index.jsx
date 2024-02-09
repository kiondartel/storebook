import { Component } from "react";
import { connect } from "react-redux";
import { fetchFavoriteBooks } from "../../../../store/actions/favoriteBooks_actions";

import {
  HeaderContainer,
  HeaderTitle,
  ViewAllButton,
  FavoriteBooksContainer,
  BookContainer,
  BookImage,
  BookTitle,
  BookAuthor,
} from "./styles.js";
import Loader from "../../../../components/LoadingSpinner";

class FavoriteBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchFavoriteBooks();
  }
  limitNameLength(name, maxLength) {
    if (name.length > maxLength) {
      return name.slice(0, maxLength) + "...";
    }
    return name;
  }
  render() {
    const { favoriteBooks } = this.props;
    const favoriteBooksSlice = favoriteBooks.data.slice(0, 8);
    return (
      <div>
        <HeaderContainer>
          <HeaderTitle>Livros favoritos</HeaderTitle>
          <ViewAllButton to="/">ver todos</ViewAllButton>
        </HeaderContainer>

        <FavoriteBooksContainer>
          {favoriteBooksSlice.loadingFavoriteBooks ? (
            <Loader />
          ) : (
            favoriteBooksSlice.map((book, index) => (
              <BookContainer to={`/book/${book.id}`} key={index}>
                <BookImage src={book.cover} alt={book.name} />
                <BookTitle>{this.limitNameLength(book.name, 20)}</BookTitle>
                <BookAuthor>{book.author.name}</BookAuthor>
              </BookContainer>
            ))
          )}
        </FavoriteBooksContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favoriteBooks: state.favoriteBooks,
  loadingFavoriteBooks: state.loadingFavoriteBooks,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFavoriteBooks: () => dispatch(fetchFavoriteBooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteBook);
