import { URL } from "api";

export const searchAnimeAPI = (data) => {
  return fetch(URL.SEARCH_ANIME, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => data)
    .then((error) => error);
};
