import { Hero } from "./heroes";
import { HeroesPagination } from "./heroesPagination";

export type State = {
  heroes: Hero[]
  heroesPagination: HeroesPagination | null
}
