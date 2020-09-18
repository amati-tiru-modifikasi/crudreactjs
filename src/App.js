import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import JumboTronComponent from "./components/JumboTronComponent";

const App = props => {
  const state = {
    title: "Wahidev Academy ~ ATM"
  };
  return (
    <>
      <NavbarComponent />
      <JumboTronComponent title={state.title} />
    </>
  );
};

export default App;
