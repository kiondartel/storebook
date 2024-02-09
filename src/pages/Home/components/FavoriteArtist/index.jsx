import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFavoriteArtist } from "../../../../store/actions/favoriteArtist_actions";

import {
  TitleContainer,
  ViewAll,
  ArtistContent,
  ArtistContainer,
  ArtistImage,
  ArtistInfo,
} from "./styles.js";

import Loader from "../../../../components/LoadingSpinner";

class FavoriteArtist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchFavoriteArtist();
  }

  render() {
    const { favoriteArtist } = this.props;

    return (
      <div>
        <TitleContainer>
          <h1>Artistas favoritos</h1>
          <ViewAll>ver todos</ViewAll>
        </TitleContainer>
        {favoriteArtist.loadingFavoriteArtist ? (
          <Loader />
        ) : (
          <ArtistContainer>
            {favoriteArtist.data.map((artist) => (
              <ArtistContent key={artist.id}>
                <ArtistImage src={artist.picture} alt={artist.name} />
                <ArtistInfo>
                  <h3>{artist.name}</h3>
                  <p>{artist.booksCount} livros</p>
                </ArtistInfo>
              </ArtistContent>
            ))}
          </ArtistContainer>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favoriteArtist: state.favoriteArtist,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFavoriteArtist: () => dispatch(fetchFavoriteArtist()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteArtist);
