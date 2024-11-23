import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: [
    { id: 1, title: "Software Engineer" },
    { id: 2, title: "Product Manager" },
    { id: 3, title: "UI/UX Designer" },
  ],
  reducers: {
    setJobs: (state, action) => action.payload,
  },
});

export const { setJobs } = jobsSlice.actions;
export default jobsSlice.reducer;
