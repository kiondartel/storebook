import { LoadingSpinner, StyledLoaderContainer } from "./styles.js";
import React, { Component } from "react";
class Loader extends Component {
  render() {
    return (
      <StyledLoaderContainer>
        <LoadingSpinner />
      </StyledLoaderContainer>
    );
  }
}

export default Loader;
