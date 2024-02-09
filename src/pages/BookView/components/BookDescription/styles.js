import styled from "styled-components";

export const BookDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 75%;
  height: auto;
  margin-bottom: 5rem;
  @media (max-width: 1550px) {
    width: auto;
    margin-left: 10px;
  }
  @media (max-width: 850px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const DescriptionText = styled.p`
  font-size: 18px;
  word-spacing: 5px;
  color: rgb(111, 109, 109);
  font-weight: normal;
  margin-bottom: 20px;
  @media (max-width: 850px) {
    font-size: 15px;
  }
`;

export const BookHeaderQuery = styled.p`
  display: none;
  h1 {
    font-size: 1.2rem;
    color: #5e5353;
    max-width: 90%;
    white-space: break-spaces;
  }
  p {
    font-size: 14px;
    margin-top: 10px;
    font-weight: bold;
    color: rgb(111, 109, 109);
  }
  @media (max-width: 850px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    position: relative;
    justify-content: space-between;
  }
`;

export const FavoriteContainer = styled.div`
  display: none;

  @media (max-width: 850px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    stroke: currentcolor;
    fill: currentcolor;
    stroke-width: 0;
    color: rgba(86, 86, 86, 0.83);
  }
`;
