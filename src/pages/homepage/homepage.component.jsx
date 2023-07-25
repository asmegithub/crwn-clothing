/** @format */

import React from "react";
import MenuItem from "../../components/menu-item/menu-item.component";
import Directory from "../../components/directory/directory.component";
import "./homepage.style.scss";
const HomePage = () => (
  <div className="homepage">
    <Directory />
    {/* <div className="directory-menu">
      <MenuItem title="Hats" />
      <MenuItem title="Trousers" />
      <MenuItem title="Men" />
      <MenuItem title="Women" />
    </div> */}
  </div>
);
export default HomePage;
