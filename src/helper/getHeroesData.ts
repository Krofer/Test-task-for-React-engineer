import { API_URL } from "../constants";

export const getHeroesData = (url: string = `${API_URL}/people/`) => {
  return fetch(url)
    .then((response) => response.json())
}
