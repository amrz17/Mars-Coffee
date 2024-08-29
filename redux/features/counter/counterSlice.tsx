import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define Value Type
interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Reducer dengan payload, menggunakan PayloadAction untuk mendefinisikan tipe payload
    increment(state, action: PayloadAction<number | undefined>) {
      state.value += action.payload ?? 1;
    },

    decrement(state, action: PayloadAction<number | undefined>) {
      if (state.value > 0) {
        state.value -= action.payload ?? 1;
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
