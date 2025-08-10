import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;

// 1st step: creating store & creting slice
//2nd : Provide in main jx so that all can you it. <Provider>
//3es: step to use it.

//WANT TO RENDER MULTIPLE THING USE MAP FOR IT MAP METHOD
//idely you don't have to make those component which have backend work but we have this situaiton so we are making .
