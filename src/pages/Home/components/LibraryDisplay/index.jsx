import { Component } from "react";
import { connect } from "react-redux";
import { fetchAllBooks } from "../../../../store/actions/libraryDisplay_helpers";
import {
  Container,
  ButtonGroup,
  BooksGrid,
  BookCard,
  BookInfo,
} from "./styles.js";

const categories = [
  { id: null, label: "Todos" },
  { id: "ROMANCE", label: "Romance" },
  { id: "ADVENTURE", label: "Aventura" },
  { id: "COMEDY", label: "Comédia" },
];
class LibraryDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: null,
      currentFilter: null,
    };
  }

  componentDidMount() {
    this.props.fetchAllBooks();
  }

  filterBooksByCategory = (category) => {
    this.setState({ selectedCategory: category });
  };
  limitNameLength(name, maxLength) {
    if (name.length > maxLength) {
      return name.slice(0, maxLength) + "...";
    }
    return name;
  }

  render() {
    const { allBooks } = this.props;
    const { selectedCategory } = this.state;

    const filteredBooks = selectedCategory
      ? allBooks.data.filter((book) => book.category === selectedCategory)
      : allBooks.data;

    const booksSlice = filteredBooks.slice(0, 15);

    return (
      <Container>
        <h1>Biblioteca</h1>
        <ButtonGroup>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => this.filterBooksByCategory(category.id)}
              className={
                this.state.selectedCategory === category.id ? "active" : ""
              }
            >
              {category.label}
            </button>
          ))}
        </ButtonGroup>
        <BooksGrid>
          {booksSlice.map((book) => (
            <BookCard to={`/book/${book.id}`} key={book.id}>
              <img src={book.cover} alt={book.name} />
              <BookInfo>
                <h2>{this.limitNameLength(book.name, 18)}</h2>
                <p>{book.author.name}</p>
              </BookInfo>
            </BookCard>
          ))}
        </BooksGrid>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  allBooks: state.allBooks,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllBooks: () => dispatch(fetchAllBooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LibraryDisplay);
