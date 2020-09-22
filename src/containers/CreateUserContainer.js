import React, { Component } from "react";
import { Container } from "reactstrap";
import FormComponent from "../components/FormComponent";

class CreateUserContainer extends Component {
  handleSubmit(data) {
    console.log(data);
  }

  render() {
    return (
      <Container>
        Create user
        <FormComponent onSubmit={data => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default CreateUserContainer;
