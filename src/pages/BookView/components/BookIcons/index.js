import React from "react";
import { IconsContainer, IconWithText } from "./styles.js";

import { AiOutlineHeart } from "react-icons/ai";
import { GoDownload } from "react-icons/go";
import { BsShareFill } from "react-icons/bs";

class BookIcons extends React.Component {
  render() {
    return (
      <IconsContainer>
        <IconWithText>
          <AiOutlineHeart size={26} color="#565656d4" />
          <span>Favoritar</span>
        </IconWithText>
        <IconWithText>
          <BsShareFill size={26} />
          <span>Compartilhar</span>
        </IconWithText>
        <IconWithText>
          <GoDownload size={26} />
          <span>Salvar em uma lista</span>
        </IconWithText>
      </IconsContainer>
    );
  }
}

export default BookIcons;
