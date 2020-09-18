import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const columns = [
  {
    dataField: "id",
    text: "ID",
    headerStyle: () => {
      return { width: "5%" };
    }
  },
  {
    dataField: "nama",
    text: "Nama"
  },
  {
    dataField: "alamat",
    text: "Alamat"
  },
  {
    dataField: "link",
    text: "Action",
    formatter: () => {
      return (
        <>
          <Button color="dark" className="mr-2">
            <FontAwesomeIcon icon={faInfo} />
            Detail
          </Button>
          <Button color="dark" className="mr-2">
            <FontAwesomeIcon icon={faEdit} />
            Edit
          </Button>
          <Button color="dark" className="mr-2">
            <FontAwesomeIcon icon={faTrash} />
            Hapus
          </Button>
        </>
      );
    }
  }
];

const TableComponent = props => {
  return (
    <Container>
      <BootstrapTable keyField="id" data={props.users} columns={columns} />;
    </Container>
  );
};

export default TableComponent;
