import { createSlice } from '@reduxjs/toolkit';

const initialState: boolean = false;

export const headerSlice = createSlice({
  name: 'header',
  initialState: initialState,
  reducers: {
    toggle: (state) => !state,
  },
});

export const headerReducer = headerSlice.reducer;
export const { toggle } = headerSlice.actions;
