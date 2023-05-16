import { createSlice } from '@reduxjs/toolkit';
import { heroesInitialState, heroesReducer } from './';

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState: heroesInitialState,
  reducers: heroesReducer,
});


