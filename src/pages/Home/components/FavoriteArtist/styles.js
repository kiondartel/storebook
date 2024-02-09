import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 86%;
  margin-bottom: 20px;
  margin-left: 40px;
  margin-top: 20px;

  @media (max-width: 850px) {
    width: 98%;
    margin-left: 5px;
  }
  h1 {
    @media (max-width: 850px) {
      font-size: 1.3rem;
    }
  }
`;

export const ViewAll = styled.span`
  text-decoration: none;
  color: #a076f2;
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 850px) {
    font-size: 16px;
  }
`;
export const ArtistContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 85%;
  @media (max-width: 850px) {
    width: 100%;
    justify-content: start;
    overflow-x: auto;
    overflow-y: hidden;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 20px;
  }
`;
export const ArtistContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 350px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  gap: 20px;
  margin-left: 2.5rem;
  object-fit: cover;
  @media (max-width: 710px) {
    margin-left: 1rem;
    padding-right: 7rem;
  }
`;

export const ArtistImage = styled.img`
  width: 20%;
  height: 75px;
  border-radius: 10px;
  object-fit: cover;
  @media (max-width: 850px) {
    width: 80px;
    height: 90px;
  }
`;

export const ArtistInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h3 {
    font-weight: bold;
    font-size: 1em;
    color: rgb(111, 109, 109);
    @media (max-width: 850px) {
      font-size: 0.9em;
    }
  }

  p {
    color: #b6b1b1;
    font-size: 13px;
    @media (max-width: 850px) {
      font-size: 12px;
    }
  }
`;
