import { createSlice } from "@reduxjs/toolkit";

import Languages from "../../common/Languages";

const initialState = {
  language: Languages.english
};

const localizationSlice = createSlice({
  name: "localization",
  initialState,
  reducers: {
    setLocalization: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLocalization } = localizationSlice.actions;

const { reducer } = localizationSlice;
export default reducer;