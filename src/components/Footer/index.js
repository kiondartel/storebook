import { Component } from "react";
import { StyledFooter, IconContainer, IconItem } from "./styles.js";
import { AiFillHome } from "react-icons/ai";
import { HiSearch } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";
class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <h2>SSBOOK</h2>
        <p>
          Todos os direitos reservados.
          <br />
          Gabriel Books © 2023
        </p>
        <IconContainer>
          <IconItem to="/">
            <AiFillHome size={22} />
            <span style={{ fontWeight: "bold", color: " #a076f2" }}>
              Início
            </span>
          </IconItem>
          <IconItem>
            <BsPlusCircleFill size={22} color="#9d9494" />
            <span>Adicionar</span>
          </IconItem>
          <IconItem>
            <HiSearch size={22} color="#9d9494" />
            <span>Buscar</span>
          </IconItem>
          <IconItem>
            <FaHeart size={22} color="#9d9494" />
            <span>Favoritos</span>
          </IconItem>
        </IconContainer>
      </StyledFooter>
    );
  }
}

export default Footer;
