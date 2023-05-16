import { API_URL } from "../constants";

export const getHeroesData = (url: string = `${API_URL}/people/`) => {
  return fetch(`${API_URL}/people/`)
    .then((response) => response.json())
}
