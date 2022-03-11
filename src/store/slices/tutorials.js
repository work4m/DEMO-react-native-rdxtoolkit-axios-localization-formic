import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TutorialDataService from "./../../services/TutorialService";

const initialState = [];

export const createTutorial = createAsyncThunk(
  "tutorials/create",
  async ({ title, description }) => {
    const res = await TutorialDataService.getAll({ title, description });
    return res.data;
  }
);
const tutorialSlice = createSlice({
  name: "tutorial",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createTutorial.pending, (state, { meta }) => {
        if(meta.arg.page === 1) {
            state.loading = true;
        }
    });
    builder.addCase(createTutorial.fulfilled, (state, action) => {
        state.newsFeeds = action.payload;
        state.loading = false;
    });
    builder.addCase(createTutorial.rejected, (state, action) => {
        console.log("error from message :: ", action.error.message);
        state.getpostError = action.error.message;
        state.loading = false;
    });
},
});

const { reducer } = tutorialSlice;
export default reducer;