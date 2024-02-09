import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px 5px;
  background-color: #a076f2;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  color: white;
  z-index: 1000;
  h2 {
    color: white;
    font-size: 27px;
  }

  p {
    color: white;
    font-size: 13px;
    text-align: center;
  }

  @media (max-width: 850px) {
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 1);
    padding: 15px 5px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    h2,
    p {
      display: none;
    }
  }
`;

export const IconContainer = styled.div`
  display: none;
  gap: 15px;

  @media (max-width: 850px) {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
`;

export const IconItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #a076f2;
  span {
    margin-top: 4px;
    font-size: 12px;
    color: #9d9494;
  }
`;
