import { createSlice } from "@reduxjs/toolkit";
import { pins as initialPins } from "../data/pinsData";

const pinsSlice = createSlice({
  name: "pins",
  initialState: { items: initialPins, category: "All" },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    toggleSave: (state, action) => {
      const pin = state.items.find((p) => p.id === action.payload);
      if (pin) pin.saved = !pin.saved;
    },
  },
});

export const { setCategory, toggleSave } = pinsSlice.actions;
export default pinsSlice.reducer;