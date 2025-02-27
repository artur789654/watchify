import { Genre, Movie, TVShow } from "../../types/media";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const FETCH_BANNER_MOVIE_REQUEST = "FETCH_BANNER_MOVIE_REQUEST";
export const FETCH_BANNER_MOVIE_SUCCESS = "FETCH_BANNER_MOVIE_SUCCESS";
export const FETCH_BANNER_MOVIE_FAILURE = "FETCH_BANNER_MOVIE_FAILURE";

interface FetchBannerMovieRequestAction {
  type: typeof FETCH_BANNER_MOVIE_REQUEST;
}
interface FetchBannerMovieSuccessAction {
  type: typeof FETCH_BANNER_MOVIE_SUCCESS;
  payload: Movie;
}
interface FetchBannerMovieFailureAction {
  type: typeof FETCH_BANNER_MOVIE_FAILURE;
  payload: string;
}

export type bannerActionsTypes =
  | FetchBannerMovieRequestAction
  | FetchBannerMovieSuccessAction
  | FetchBannerMovieFailureAction;

export const FETCH_POPULAR_MOVIES_REQUEST = "FETCH_POPULAR_MOVIES_REQUEST";
export const FETCH_POPULAR_MOVIES_SUCCESS = "FETCH_POPULAR_MOVIES_SUCCESS";
export const FETCH_POPULAR_MOVIES_FAILURE = "FETCH_POPULAR_MOVIES_FAILURE";

export interface FetchPopularMoviesRequest {
  type: typeof FETCH_POPULAR_MOVIES_REQUEST;
}

export interface FetchPopularMoviesSuccess {
  type: typeof FETCH_POPULAR_MOVIES_SUCCESS;
  payload: {
    media: Movie[];
    totalPages: number;
  };
}

export interface FetchPopularMoviesFailure {
  type: typeof FETCH_POPULAR_MOVIES_FAILURE;
  payload: string;
}

export type PopularMoviesActionTypes =
  | FetchPopularMoviesRequest
  | FetchPopularMoviesSuccess
  | FetchPopularMoviesFailure;

export const FETCH_TOP_RATED_MOVIES_REQUEST = "FETCH_TOP_RATED_MOVIES_REQUEST";
export const FETCH_TOP_RATED_MOVIES_SUCCESS = "FETCH_TOP_RATED_MOVIES_SUCCESS";
export const FETCH_TOP_RATED_MOVIES_FAILURE = "FETCH_TOP_RATED_MOVIES_FAILURE";

export interface FetchTopRatedMoviesRequest {
  type: typeof FETCH_TOP_RATED_MOVIES_REQUEST;
}

export interface FetchTopRatedMoviesSuccess {
  type: typeof FETCH_TOP_RATED_MOVIES_SUCCESS;
  payload: {
    media: Movie[];
    totalPages: number;
  };
}

export interface FetchTopRatedMoviesFailure {
  type: typeof FETCH_TOP_RATED_MOVIES_FAILURE;
  payload: string;
}

export type TopRatedMoviesActionsTypes =
  | FetchTopRatedMoviesRequest
  | FetchTopRatedMoviesSuccess
  | FetchTopRatedMoviesFailure;

export const FETCH_UPCOMING_MOVIES_REQUEST = "FETCH_UPCOMING_MOVIES_REQUEST";
export const FETCH_UPCOMING_MOVIES_SUCCESS = "FETCH_UPCOMING_MOVIES_SUCCESS";
export const FETCH_UPCOMING_MOVIES_FAILURE = "FETCH_UPCOMING_MOVIES_FAILURE";

export interface FetchUpcomingMoviesRequest {
  type: typeof FETCH_UPCOMING_MOVIES_REQUEST;
}

export interface FetchUpcomingMoviesSuccess {
  type: typeof FETCH_UPCOMING_MOVIES_SUCCESS;
  payload: {
    media: Movie[];
    totalPages: number;
  };
}

export interface FetchUpcomingMoviesFailure {
  type: typeof FETCH_UPCOMING_MOVIES_FAILURE;
  payload: string;
}

export type UpcomingMoviesActionsTypes =
  | FetchUpcomingMoviesRequest
  | FetchUpcomingMoviesSuccess
  | FetchUpcomingMoviesFailure;

export const FETCH_TOP_RATED_TV_SHOW_REQUEST =
  "FETCH_TOP_RATED_TV_SHOW_REQUEST";
export const FETCH_TOP_RATED_TV_SHOW_SUCCESS =
  "FETCH_TOP_RATED_TV_SHOW_SUCCESS";
export const FETCH_TOP_RATED_TV_SHOW_FAILURE =
  "FETCH_TOP_RATED_TV_SHOW_FAILURE";

export interface FetchTopRatedTvShowRequest {
  type: typeof FETCH_TOP_RATED_TV_SHOW_REQUEST;
}

export interface FetchTopRatedTvShowSuccess {
  type: typeof FETCH_TOP_RATED_TV_SHOW_SUCCESS;
  payload: {
    media: TVShow[];
    totalPages: number;
  };
}

export interface FetchTopRatedTvShowFailure {
  type: typeof FETCH_TOP_RATED_TV_SHOW_FAILURE;
  payload: string;
}

export type TopRatedTvShowActionTypes =
  | FetchTopRatedTvShowRequest
  | FetchTopRatedTvShowSuccess
  | FetchTopRatedTvShowFailure;

export const FETCH_POPULAR_TV_SHOW_REQUEST = "FETCH_POPULAR_TV_SHOW_REQUEST";
export const FETCH_POPULAR_TV_SHOW_SUCCESS = "FETCH_POPULAR_TV_SHOW_SUCCESS";
export const FETCH_POPULAR_TV_SHOW_FAILURE = "FETCH_POPULAR_TV_SHOW_FAILURE";

export interface FetchPopularTvShowRequest {
  type: typeof FETCH_POPULAR_TV_SHOW_REQUEST;
}

export interface FetchPopularTvShowSuccess {
  type: typeof FETCH_POPULAR_TV_SHOW_SUCCESS;
  payload: {
    media: TVShow[];
    totalPages: number;
  };
}

export interface FetchPopularTvShowFailure {
  type: typeof FETCH_POPULAR_TV_SHOW_FAILURE;
  payload: string;
}

export type PopularTvShowActionTypes =
  | FetchPopularTvShowRequest
  | FetchPopularTvShowSuccess
  | FetchPopularTvShowFailure;

export interface UserData {
  name: string;
  email: string;
  password: string;
  isAuthenticated?: boolean;
}

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export interface RegisterRequestAction {
  type: typeof REGISTER_REQUEST;
}

export interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  payload: UserData;
}

export interface RegisterFailureAction {
  type: typeof REGISTER_FAILURE;
  payload: string;
}

export const LOGIN_REQUEST = "LOGIN_REQUEST ";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: UserData;
}

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string;
}

export const LOGOUT = "LOGOUT";
export interface LogoutAction {
  type: typeof LOGOUT;
}
export type AuthActionTypes =
  | RegisterRequestAction
  | RegisterSuccessAction
  | RegisterFailureAction
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction;

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILURE = "RESET_PASSWORD_FAILURE";

export const SEND_PASSWORD_RESET_EMAIL_REQUEST =
  "SEND_PASSWORD_RESET_EMAIL_REQUEST";
export const SEND_PASSWORD_RESET_EMAIL_SUCCESS =
  "SEND_PASSWORD_RESET_EMAIL_SUCCESS";
export const SEND_PASSWORD_RESET_EMAIL_FAILURE =
  "SEND_PASSWORD_RESET_EMAIL_FAILURE";

export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST";
export const REMOVE_FROM_WATCHLIST = "REMOVE_FROM_WATCHLIST";
export const SET_WATCHLIST = "SET_WATCHLIST";

export const FETCH_MOVIE_REQUEST = "FETCH_MOVIE_REQUEST";
export const FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS";
export const FETCH_MOVIE_FAILURE = "FETCH_MOVIE_FAILURE";

interface FetchMovieRequestAction {
  type: typeof FETCH_MOVIE_REQUEST;
}

interface FetchMovieSuccessAction {
  type: typeof FETCH_MOVIE_SUCCESS;
  payload: {
    media: any[];
    totalPages: number;
  };
}

interface FetchMovieFailureAction {
  type: typeof FETCH_MOVIE_FAILURE;
  payload: {
    error: string;
  };
}
export type MovieActionTypes =
  | FetchMovieRequestAction
  | FetchMovieSuccessAction
  | FetchMovieFailureAction;

export const FETCH_TV_REQUEST = "FETCH_TV_REQUEST";
export const FETCH_TV_SUCCESS = "FETCH_TV_SUCCESS";
export const FETCH_TV_FAILURE = "FETCH_TV_FAILURE";
interface FetchTvRequestAction {
  type: typeof FETCH_TV_REQUEST;
}

interface FetchTvSuccessAction {
  type: typeof FETCH_TV_SUCCESS;
  payload: {
    media: any[];
    totalPages: number;
  };
}

interface FetchTvFailureAction {
  type: typeof FETCH_TV_FAILURE;
  payload: {
    error: string;
  };
}
export type TvActionTypes =
  | FetchTvRequestAction
  | FetchTvSuccessAction
  | FetchTvFailureAction;

export const FETCH_GENRES_MOVIES_REQUEST = "FETCH_GENRES_MOVIES_REQUEST";
export const FETCH_GENRES_MOVIES_SUCCESS = "FETCH_GENRES_MOVIES_SUCCESS";
export const FETCH_GENRES_MOVIES_FAILURE = "FETCH_GENRES_MOVIES_FAILURE";

interface FetchGenresMoviesRequestAction {
  type: typeof FETCH_GENRES_MOVIES_REQUEST;
}

interface FetchGenresMoviesSuccessAction {
  type: typeof FETCH_GENRES_MOVIES_SUCCESS;
  payload: Genre[];
}

interface FetchGenresMoviesFailureAction {
  type: typeof FETCH_GENRES_MOVIES_FAILURE;
  payload: string;
}

export type GenreMoviesActionTypes =
  | FetchGenresMoviesRequestAction
  | FetchGenresMoviesSuccessAction
  | FetchGenresMoviesFailureAction;

export const FETCH_GENRES_TV_REQUEST = "FETCH_GENRES_TV_REQUEST";
export const FETCH_GENRES_TV_SUCCESS = "FETCH_GENRES_TV_SUCCESS";
export const FETCH_GENRES_TV_FAILURE = "FETCH_GENRES_TV_FAILURE";

interface FetchGenresTvRequestAction {
  type: typeof FETCH_GENRES_TV_REQUEST;
}

interface FetchGenresTvSuccessAction {
  type: typeof FETCH_GENRES_TV_SUCCESS;
  payload: Genre[];
}

interface FetchGenresTvFailureAction {
  type: typeof FETCH_GENRES_TV_FAILURE;
  payload: string;
}

export type GenreTvActionTypes =
  | FetchGenresTvRequestAction
  | FetchGenresTvSuccessAction
  | FetchGenresTvFailureAction;

export const FETCH_MOVIE_DETAILS_REQUEST = "FETCH_MOVIE_DETAILS_REQUEST";
export const FETCH_MOVIE_DETAILS_SUCCESS = "FETCH_MOVIE_DETAILS_SUCCESS";
export const FETCH_MOVIE_DETAILS_FAILURE = "FETCH_MOVIE_DETAILS_FAILURE";

interface FetchMovieDetailsRequestAction {
  type: typeof FETCH_MOVIE_DETAILS_REQUEST;
}

interface FetchMovieDetailsSuccessAction {
  type: typeof FETCH_MOVIE_DETAILS_SUCCESS;
  payload: Movie;
}

interface FetchMovieDetailsFailureAction {
  type: typeof FETCH_MOVIE_DETAILS_FAILURE;
  payload: string;
}

export type MovieDetailsActionTypes =
  | FetchMovieDetailsRequestAction
  | FetchMovieDetailsSuccessAction
  | FetchMovieDetailsFailureAction;

export const FETCH_TV_DETAILS_REQUEST = "FETCH_TV_DETAILS_REQUEST";
export const FETCH_TV_DETAILS_SUCCESS = "FETCH_TV_DETAILS_SUCCESS";
export const FETCH_TV_DETAILS_FAILURE = "FETCH_TV_DETAILS_FAILURE";

interface FetchTvDetailsRequestAction {
  type: typeof FETCH_TV_DETAILS_REQUEST;
}

interface FetchTvDetailsSuccessAction {
  type: typeof FETCH_TV_DETAILS_SUCCESS;
  payload: TVShow;
}

interface FetchTvDetailsFailureAction {
  type: typeof FETCH_TV_DETAILS_FAILURE;
  payload: string;
}

export type TvDetailsActionTypes =
  | FetchTvDetailsRequestAction
  | FetchTvDetailsSuccessAction
  | FetchTvDetailsFailureAction;

export const ADD_REVIEW_REQUEST = "ADD_REVIEW_REQUEST";
export const ADD_REVIEW_SUCCESS = "ADD_REVIEW_SUCCESS";
export const ADD_REVIEW_FAILURE = "ADD_REVIEW_FAILURE";

export const FETCH_REVIEWS_REQUEST = "FETCH_REVIEWS_REQUEST";
export const FETCH_REVIEWS_SUCCESS = "FETCH_REVIEWS_SUCCESS";
export const FETCH_REVIEWS_FAILURE = "FETCH_REVIEWS_FAILURE";

export const FETCH_SEARCH_REQUEST = "SEARCH_REQUEST";
export const FETCH_SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const FETCH_SEARCH_FAILURE = "SEARCH_FAILURE";

export interface FetchSearchRequest {
  type: typeof FETCH_SEARCH_REQUEST;
}
export interface FetchSearchSuccess {
  type: typeof FETCH_SEARCH_SUCCESS;
  payload: Movie | TVShow;
}
export interface FetchSearchFailure {
  type: typeof FETCH_SEARCH_FAILURE;
  payload: string;
}

export type SearchActionsType =
  | FetchSearchRequest
  | FetchSearchSuccess
  | FetchSearchFailure;

export const UPDATE_PROFILE_REQUEST = "UPDATE_PROFILE_REQUEST";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAILURE = "UPDATE_PROFILE_FAILURE";

export const CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST";
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_FAILURE = "CHANGE_PASSWORD_FAILURE";
