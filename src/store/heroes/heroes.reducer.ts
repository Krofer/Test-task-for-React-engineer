import { PayloadAction } from '@reduxjs/toolkit';

import { Hero, HeroesPagination, State } from '../../types';

export const heroesReducer = {
  // TODO: убрать
  addHeroes: (state: State, action: PayloadAction<Hero[]>) => {
    state.heroes = action.payload
  },
  addHeroesPagination: (state: State, action: PayloadAction<HeroesPagination>) => {
    state.heroesPagination = action.payload
  }
};
