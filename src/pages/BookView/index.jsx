import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BookDetail from "./components/BookDetail";
import MediaQuery from "react-responsive";
import { BookViewContainer } from "./styles.js";
class BookView extends React.Component {
  render() {
    const { bookId } = this.props;

    return (
      <BookViewContainer>
        <MediaQuery minWidth={850} />
        <BookDetail bookId={bookId} />
      </BookViewContainer>
    );
  }
}

const BookViewWithRouter = (props) => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <BookView
      {...props}
      bookId={params.bookId}
      location={location}
      navigate={navigate}
    />
  );
};

export default BookViewWithRouter;
