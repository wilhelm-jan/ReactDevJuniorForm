import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    who: "",
    what: "",
    where: "",
    when: "",
  },
  reducers: {
    typeWho: (state, action) => {
      state.who = action.payload;
    },
    typeWhat: (state, action) => {
      state.what = action.payload;
    },
    typeWhere: (state, action) => {
      state.where = action.payload;
    },
    typeWhen: (state, action) => {
      state.when = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;

export const { typeWho, typeWhat, typeWhere, typeWhen } = rootSlice.actions;
