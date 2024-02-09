import React, { Component } from "react";

import { AboutText, AboutDescriptionContainer } from "./styles";
import MediaQuery from "react-responsive";

class AboutDescription extends Component {
  render() {
    return (
      <AboutDescriptionContainer>
        <MediaQuery minWidth={850}>
          <h1>Sobre o autor</h1>
        </MediaQuery>
        <AboutText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
          <br /> <br />
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software also the leap into electronic typesetting,
          remaining essentially unchanged.
          <br /> <br />
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software passages, and more recently with desktop
          publishing software passages, and more recently with desktop
          <br /> <br />
          publishing software the release of Letraset sheets containing Lorem
          Ipsum the release of Letraset sheets containing Lorem Ipsum ges, and
          more recently with desktop publishing software passages, and more
          recently with desktop publishing software the release of Letraset
          sheets containing Lorem Ipsum the release of Letraset sheets
          containing Lorem Ipsum
        </AboutText>
      </AboutDescriptionContainer>
    );
  }
}

export default AboutDescription;
