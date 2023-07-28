/** @format */

import React from "react";
import FormInput from "./component/FormInput";

import "./app.css";

const App = () => {
  const { useState } = React;
  const [username, setUsername] = useState("");
  console.log(username);
  return (
    <div className="app">
      <form>
        <FormInput placeholder="username" setUsername={setUsername} />
        <FormInput placeholder="email" />
        <FormInput placeholder="password" />
        <FormInput placeholder="others" />
      </form>
    </div>
  );
};

export default App;
