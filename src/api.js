import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    language: "ko",
    api_key: "8781f0b76bf2d697908b701ab8439073",
  },
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  moiveDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (str) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(str),
      },
    }),
};
export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  airingToday: () => api.get("tv/airing_today"),
  popular: () => api.get("tv/popular"),
  moiveDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (str) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(str),
      },
    }),
};
