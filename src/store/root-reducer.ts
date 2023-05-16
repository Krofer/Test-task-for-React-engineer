import { heroesSlice } from './heroes';

export const rootReducer = {
  heroes: heroesSlice.reducer
};
