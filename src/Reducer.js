import { createReducer } from "@reduxjs/toolkit";
const initailState = {
  c: 0,
};

export const customReducer = createReducer(initailState, (builder) => {
  builder
    .addCase("increment", (state) => {
      state.c += 1;
    })
    .addCase("incrementByValue", (state, action) => {
      state.c += action.payload;
    })
    .addCase("decrement", (state) => {
      state.c -= 1;
    });
});
