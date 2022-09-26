import { createSlice } from "@reduxjs/toolkit";

const dishesSlice = createSlice({
  name: "dishes",
  initialState: {
    currentDish: null,
  },
  reducers: {
    setCurrentDish: (state, action) => {
      state.currentDish = action.payload;
    },
    },
});

export const { setCurrentDish } = dishesSlice.actions;
export default dishesSlice.reducer;
