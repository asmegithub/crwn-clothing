/** @format */
import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component.jsx";
import "./App.css";

const HatsPage = (props) => <h1>Hats Page</h1>;

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
