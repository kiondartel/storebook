import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  @media (max-width: 850px) {
    padding: 0px;
    margin-bottom: 15px;
  }
`;

export const HeaderTitle = styled.h1`
  color: #555050;

  @media (max-width: 850px) {
    font-size: 1.3rem;
  }
`;

export const ViewAllButton = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #a076f2;
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 850px) {
    font-size: 17px;
  }
`;

export const FavoriteBooksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  margin-left: 1rem;

  @media (max-width: 850px) {
    overflow-x: auto;
    overflow-y: hidden;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 20px;
  }
`;

export const BookContainer = styled(Link)`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;
  margin-left: 1rem;
  @media (max-width: 850px) {
    width: auto;
    margin-bottom: 10px;
  }
`;

export const BookImage = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 7px;
  border: 1px solid rgb(173, 168, 168);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 850px) {
    width: auto;
  }
`;

export const BookTitle = styled.div`
  margin-top: 10px;
  color: #555050;
  font-weight: bold;
  font-size: 17px;
  text-align: center;
`;

export const BookAuthor = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #acacac;
  text-align: center;
`;
