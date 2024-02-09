import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModelOpen: false,
  isDrawerOpen: false,
  isFormModel: false,
  checkNum: 2,
  jobType: "",
  QuoteFormData: [],
  Navlinks: [
    { title: "Home", link: "#home" },
    { title: "about us", link: "#about" },
    { title: "Portfolio", link: "#portfolio" },
    { title: "Services", link: "#service" },
    { title: "Careers", link: "#career" },
    { title: "Partners", link: "#client" },
    { title: "Contact", link: "#contact" },
  ],
};

const QuoteSlicer = createSlice({
  name: "show",
  initialState,
  reducers: {
    setModelOpen: (state) => {
      state.isModelOpen = !state.isModelOpen;
    },
    setDrawerOpen: (state) => {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
    setformModalOpen: (state, action) => {
      state.isFormModel = !state.isFormModel;
      state.jobType = action.payload;
    },
  },
});

export const { setModelOpen, setDrawerOpen, setformModalOpen } =
  QuoteSlicer.actions;
export default QuoteSlicer.reducer;
