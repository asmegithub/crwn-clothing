/** @format */
import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import "./App.css";

const HatsPage = (props) => <h1>Hats Page</h1>;

function App() {
  return (
    <div>
      <Header />
      <switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </switch>
    </div>
  );
}

export default App;
