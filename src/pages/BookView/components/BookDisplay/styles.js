import styled from "styled-components";

export const BookDisplay = styled.div`
  display: flex;
  flex-direction: column;
  width: 23%;
  gap: 60px;

  @media (max-width: 1550px) {
    width: auto;
    margin-right: 5px;
  }
  @media (max-width: 850px) {
    display: none;
  }
`;
export const ImageContainer = styled.div`
  height: 35vh;
  position: relative;
  width: auto;

  @media (max-width: 1550) {
    display: flex;
  }

  @media (max-width: 850px) {
    display: none;
  }
`;
export const BookImage = styled.img`
  border-radius: 15px;
  height: 50vh;
  width: auto;
  object-fit: cover;
  position: absolute;
  left: 50%;
  top: -100%;
  transform: translateX(-50%) translateY(45%);
  @media (max-width: 1550px) {
    position: static;
    transform: none;
  }
`;
