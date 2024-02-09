import React, { Component } from "react";

import { TrackerContainer, Tabs, Divider } from "./styles.js";

class BookTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TrackerContainer>
        <Tabs>
          <p>Meus livros</p>
          <p>Emprestados</p>
        </Tabs>
        <Divider />
      </TrackerContainer>
    );
  }
}

export default BookTracker;
