import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const DetailUserComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td>Nama</td>
          <td>:</td>
          <td>{props.getUserDetail.nama}</td>
        </tr>
        <tr>
          <td>Alamat</td>
          <td>:</td>
          <td>{props.getUserDetail.alamat}</td>
        </tr>
        <tr>
          <td>Umur</td>
          <td>:</td>
          <td>{props.getUserDetail.umur}</td>
        </tr>
        <tr>
          <td>Nomor HP</td>
          <td>:</td>
          <td>{props.getUserDetail.nohp}</td>
        </tr>
      </tbody>
    </Table>
  );
};

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};
export default connect(mapStateToProps, null)(DetailUserComponent);
