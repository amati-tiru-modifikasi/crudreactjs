import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import JumboTronComponent from "./components/JumboTronComponent";

import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import EditUserContainer from "./containers/EditUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";

const App = (props) => {
  return (
    <>
      <NavbarComponent />
      <JumboTronComponent />
      <Router>
        <Route path="/" exact>
          <HomeContainer />
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
