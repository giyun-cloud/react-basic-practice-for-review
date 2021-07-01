import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "8781f0b76bf2d697908b701ab8439073",
    language: "ko-KR",
  },
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  detail: (id) =>
    api.get(`movie/${id}`, { params: { append_to_response: "video" } }),
  search: (str) => api.get("search/movie", { params: { query: str } }),
};

export const tvShowApi = {
  topRated: () => api.get("tv/top_rated"),
  airingToday: () => api.get("tv/airing_today"),
  popular: () => api.get("tv/popular"),
  detail: (id) =>
    api.get(`tv/${id}`, { params: { append_to_response: "video" } }),
  search: (str) => api.get("search/movie", { params: { query: str } }),
};
