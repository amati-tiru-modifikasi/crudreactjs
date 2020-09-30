import React, { Component } from "react";
import { Container } from "reactstrap";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import { postUserCreate } from "../actions/userActions";

class CreateUserContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postUserCreate(data));
  }

  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if (this.props.errorResponDataUser) {
        console.log("Failed!", this.props.errorResponDataUser, "error");
      } else {
        console.log(
          "User Created!",
          "Nama : " +
            this.props.getResponDataUser.nama +
            " , Umur : " +
            this.props.getResponDataUser.umur,
          "success"
        );
      }
    }
    return (
      <Container>
        <h1>Create User</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect()(CreateUserContainer);
