import { Component } from "react";
import NavBar from "../../components/Navbar";
import BookTracker from "../../components/BookTracker";
import FavoriteBook from "./components/FavoriteBooks";
import FavoriteArtist from "./components/FavoriteArtist";
import LibraryDisplay from "./components/LibraryDisplay";
import Footer from "../../components/Footer";
import MediaQuery from "react-responsive";

import {
  HomeContainer,
  CenterWrapper,
  HeaderContainer,
  WhiteBgContainer,
} from "./styles.js";

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <CenterWrapper>
          <HeaderContainer>
            <MediaQuery minWidth={850}>
              <BookTracker />
            </MediaQuery>
            <FavoriteBook />
          </HeaderContainer>
        </CenterWrapper>
        <WhiteBgContainer>
          <FavoriteArtist />
          <LibraryDisplay />
        </WhiteBgContainer>
      </HomeContainer>
    );
  }
}

export default Home;
