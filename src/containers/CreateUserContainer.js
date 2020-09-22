import React from "react";
import { Container } from "reactstrap";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import { postUserCreate } from "../actions/userActions";

function handleSubmit(data) {
  console.log(data.dispatch(postUserCreate()));
}

const CreateUserContainer = props => {
  return (
    <Container>
      Create user
      <FormComponent onSubmit={() => handleSubmit(props)} />
    </Container>
  );
};

export default connect()(CreateUserContainer);
