import axiosClient from "./axiosClient";

export const category = {
  movie: "movie",
} as const;

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
} as const;

type CategoryType = keyof typeof category;
type MovieTypeKey = keyof typeof movieType;

interface Params {
  [key: string]: any;
}

const tmdbApi = {
  getMovieList: (type: MovieTypeKey, params: Params) => {
    const url = "movie/" + movieType[type];
    return axiosClient.get(url, { params });
  },

  getVideos: (cate: CategoryType, id: string | number) => {
    const url = category[cate] + "/" + id + "/videos";
    return axiosClient.get(url, { params: {} });
  },

  search: (cate: CategoryType, params: Params) => {
    const url = "search/" + category[cate];
    return axiosClient.get(url, { params });
  },

  detail: (cate: CategoryType, id: string | number, params: Params) => {
    const url = category[cate] + "/" + id;
    return axiosClient.get(url, { params });
  },

  credits: (cate: CategoryType, id: string | number) => {
    const url = category[cate] + "/" + id + "/credits";
    return axiosClient.get(url, { params: {} });
  },

  similar: (cate: CategoryType, id: string | number) => {
    const url = category[cate] + "/" + id + "/similar";
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
