import React, { Component } from "react";
import { FaHeart, FaSearch } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";
import {
  NavbarContainer,
  NavbarContent,
  SearchContainer,
  InputContainer,
  Brand,
  SearchBar,
  SearchIcon,
  Actions,
  ActionLink,
  UserProfile,
  ProfilePic,
  BookTrackerStyled,
} from "./styles.js";
import BookTracker from "../BookTracker";
import { connect } from "react-redux";
import { fetchUser } from "../../store/actions/user_Actions";
import Divider from "../Dividers/index.js";
class NavBar extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    const { user } = this.props;

    return (
      <NavbarContainer>
        <NavbarContent>
          <SearchContainer>
            <Brand to="/">SSBOOK</Brand>
            <InputContainer>
              <SearchBar type="text" placeholder="Busque um livro" />
              <SearchIcon>
                <FaSearch color="gray" />
              </SearchIcon>
            </InputContainer>
          </SearchContainer>
          <Actions>
            <ActionLink href="/">
              <BsPlusCircleFill size={23} />
              Adicionar
            </ActionLink>
            <ActionLink href="/" className="favorites">
              <FaHeart size={23} />
              Favoritos
            </ActionLink>
          </Actions>
          <Divider />
          <UserProfile>
            <ProfilePic src={user.userPicture} alt="User Profile" />
            <p>Gabriel Lucas</p>
          </UserProfile>
        </NavbarContent>
        <BookTrackerStyled>
          <BookTracker />
        </BookTrackerStyled>
      </NavbarContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
