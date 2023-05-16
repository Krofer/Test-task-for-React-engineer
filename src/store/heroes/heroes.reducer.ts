import { PayloadAction } from '@reduxjs/toolkit';

import { State } from '../../types';
import { EditFormValues } from "../../pages/hero/types";

export const heroesReducer = {
  changeHero: (state: State, action: PayloadAction<EditFormValues>) => {
    const heroes = [...state.heroes]
    state.heroes = heroes.map((hero) => {
      if (hero.name !== action.payload.oldName) {
        return hero
      }

      return {
        ...hero,
        ...action.payload
      }
    })
  },
};
