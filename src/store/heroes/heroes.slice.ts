import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { heroesInitialState, heroesReducer } from './';
import { API_URL } from "../../constants";
import { HeroesResponse } from "../../types";

export const getHeroes = createAsyncThunk(
  'heroes/getHeroes',
  async (url: string = `${API_URL}/people/`) => {
    const response = await fetch(url)
    return await response.json()
  }
)

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState: heroesInitialState,
  reducers: heroesReducer,
  extraReducers: (builder) => {
    builder.addCase(getHeroes.pending, (state) => {
      state.loading = 'pending'
    })
    builder.addCase(getHeroes.fulfilled, (state, action: PayloadAction<HeroesResponse>) => {
      const { results, previous, count, next } = action.payload

      state.heroes = results
      state.heroesPagination = {
        next,
        previous,
        count
      }
      state.loading = 'idle'
    })
  },
});

export const {
  actions: {
    addHeroes: addHeroesActionCreator,
    addHeroesPagination: addHeroesPaginationActionCreator
  },
} = heroesSlice;
