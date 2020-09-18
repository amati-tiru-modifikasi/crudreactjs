import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";

class EditUserContainer extends Component {
  render() {
    return (
      <Container>
        Edit User
        <BackComponent />
      </Container>
    );
  }
}

export default EditUserContainer;
