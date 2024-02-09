import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
export const BookViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f1f1;
  @media (max-width: 850px) {
    position: relative;
  }
`;
export const BookImageQuery = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  @media (max-width: 850px) {
    background-image: url(${(props) => props.back});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    height: 750px;
  }
  @media (max-width: 716) {
    height: 650px;
  }
  @media (max-width: 536px) {
    height: 550px;
  }
`;
export const BackIcon = styled(BiArrowBack)`
  display: none;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  color: white;
  font-size: 24px;
  @media (max-width: 850px) {
    display: block;
  }
`;
export const BookContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WhiteContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  height: 85vh;
  width: 85%;
  margin-left: auto;
  border-radius: 50px 0 0;
  padding: 30px;
  z-index: 1;
  margin-top: 5rem;
  @media (max-width: 1000px) {
    padding: 15px;
  }
  @media (max-width: 850px) {
    width: 100%;
    margin-top: 27rem;
  }
`;
