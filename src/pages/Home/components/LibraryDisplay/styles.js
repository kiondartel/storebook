import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  h1 {
    margin-left: 40px;
    margin-top: 1.5rem;
    @media (max-width: 850px) {
      margin-left: 10px;
      font-size: 1.7rem;
      margin-top: 0;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  margin-left: 40px;
  margin-top: 1.5rem;

  button {
    padding: 6px 15px;
    border: 1px solid #cbc7c7;
    border-radius: 20px;
    background-color: #ffff;
    font-size: 15px;
    font-weight: bold;
    color: #565656d4;
    cursor: pointer;
    transition: background-color 0.2s;

    &.active {
      background-color: #a076f2;
      color: #ffffff;
      border: none;
    }
    @media (max-width: 850px) {
      font-size: 12px;
    }
    @media (max-width: 350px) {
      padding: 6px 8px;
    }
  }
  @media (max-width: 850px) {
    margin-left: 3px;
    padding: 3px 10px;
    gap: 7px;
  }
`;

export const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  width: 85%;
  align-self: start;
  margin-bottom: 5rem;
  margin-left: 30px;
  @media (max-width: 1450px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: auto;
    margin-left: 0;
  }
`;

export const BookCard = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100px;
    height: 150px;
    border-radius: 5px;
    margin-bottom: 0;
  }

  h3 {
    font-size: 17px;
    margin: 8px 0;
    text-align: center;
    color: #565656d4;
    @media (max-width: 440px) {
      text-align: center;
    }
  }

  p {
    font-size: 15px;
    color: gray;
    @media (max-width: 440px) {
      text-align: center;
    }
  }

  @media (max-width: 1450px) {
    width: 210px;
    height: 170px;
  }
  @media (max-width: 460px) {
    width: 80%;
    height: auto;
    text-align: center;
  }
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 17px;
    font-weight: bold;
  }

  p {
    font-size: 12px;
    color: #bebbbb;
    margin-left: 2.5px;
  }
`;
