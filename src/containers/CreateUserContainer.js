import React, { Component } from "react";
import { Container } from "reactstrap";
import FormComponent from "../components/FormComponent";

class CreateUserContainer extends Component {
  render() {
    return (
      <Container>
        Create user
        <FormComponent />
      </Container>
    );
  }
}

export default CreateUserContainer;
