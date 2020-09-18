import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import JumboTronComponent from "./components/JumboTronComponent";

import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import EditUserContainer from "./containers/EditUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";

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
      <Router>
        <Route path="/" exact>
          <HomeContainer users={state.users} />
        </Route>
        <Route path="/create" exact>
          <CreateUserContainer />
        </Route>
        <Route path="/edit/:id" exact>
          <EditUserContainer />
        </Route>
        <Route path="/detail/:id" exact>
          <DetailUserContainer />
        </Route>
      </Router>
    </>
  );
};

export default App;
