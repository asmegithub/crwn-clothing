/** @format */

import React from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

import CollectionsOverview from "../../components/collection-overview/collecctions-overview.component";
import CategoryPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
  </div>
);

export default ShopPage;
