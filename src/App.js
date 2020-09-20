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
        <Route path="/" component={HomeContainer} exact />
        <Route path="/create" component={CreateUserContainer} exact />
        <Route path="/edit/:id" component={EditUserContainer} exact />
        <Route path="/detail/:id" component={DetailUserContainer} exact />
      </Router>
    </>
  );
};

export default App;
