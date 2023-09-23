/** @format */
import shopeActionTypes from "./shope.types";

export const updateCollections = (collectionsMap) => ({
  type: shopeActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
