/** @format */

import { createSelector } from "reselect";

const selectShop = (state) => state.shop;
export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
export const selectCollectionForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);
export const selectCollection = (collectionUrlParm) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParm] : null
  );
