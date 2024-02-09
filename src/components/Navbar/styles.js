import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 90%;
  padding: 20px 20px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-bottom-right-radius: 25px;

  @media (max-width: 1300px) {
    width: 100%;
  }
  @media (max-width: 850px) {
    justify-content: space-around;
    gap: 10px;
    padding: 0;
  }
`;
export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;

  @media (max-width: 850px) {
    justify-content: space-between;
    width: 96%;
    padding: 10px;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  @media (max-width: 850px) {
    display: none;
  }
`;
export const Brand = styled(Link)`
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -1px;

  background-image: linear-gradient(to right, #000000 30%, #a076f2 25%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-decoration: none;
  @media (max-width: 850px) {
    font-size: 23px;
  }
`;
export const SearchBar = styled.input`
  margin: 0 20px;
  padding: 10px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 600px;

  @media (max-width: 1170px) {
    width: 100%;
  }
`;
export const SearchIcon = styled.div`
  position: absolute;
  color: rgb(180, 106, 106);
  right: 26px;
`;
export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;

  @media (max-width: 850px) {
    display: none;
  }
`;

export const ActionLink = styled.a`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: rgb(123, 117, 117);
  padding: 10px;
  text-decoration: none;
  gap: 10px;
  border: 1px solid white;
  font-size: 17px;
  color: #555050;
`;
export const UserProfile = styled.div`
  display: flex;
  align-items: center;

  p {
    color: #555050;
  }
  @media (max-width: 1400px) {
    p {
      display: none;
    }
  }
`;
export const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;
export const BookTrackerStyled = styled.div`
  display: none;
  @media (max-width: 850px) {
    display: block;
    width: 93%;
    margin-left: right;
  }
`;
