import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import JumboTronComponent from "./components/JumboTronComponent";
import TableComponent from "./components/TableComponent";

const App = props => {
  const state = {
    title: "Wahidev Academy ~ ATM",
    users: [
      {
        id: 1,
        nama: "desta",
        alamat: "Jakarta",
        umur: 30,
        nohp: "08989018913"
      },
      {
        id: 2,
        nama: "fadilah",
        alamat: "Jakarta",
        umur: 30,
        nohp: "08989018913"
      },
      {
        id: 3,
        nama: "budi",
        alamat: "Jakarta",
        umur: 30,
        nohp: "08989018913"
      }
    ]
  };
  return (
    <>
      <NavbarComponent />
      <JumboTronComponent title={state.title} />
      <TableComponent users={state.users} />
    </>
  );
};

export default App;
