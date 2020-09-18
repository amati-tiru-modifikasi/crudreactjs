import React, { Component } from "react";
import TableComponent from "./../components/TableComponent";

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <TableComponent users={this.props.users} />
      </div>
    );
  }
}

export default HomeContainer;
