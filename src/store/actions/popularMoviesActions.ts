import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
  FETCH_POPULAR_MOVIES_FAILURE,
  FETCH_POPULAR_MOVIES_REQUEST,
  FETCH_POPULAR_MOVIES_SUCCESS,
  PopularMoviesActionTypes,
} from "./actionTypes";
import { setToLocalStorage } from "../../helpers/storageUtils";
import axios from "axios";
import {
  API_TIMEOUT,
  POPULAR_MOVIES_ENDPOINT,
  TMDB_API_KEY,
  TMDB_BASE_URL,
} from "../../helpers/apiConstants";
import { getCachedData } from "../../helpers/getCachedData";
import { Movie } from "../../types/media";

const CACHE_KEY = "popularMovies";
const CACHE_TIME_KEY = "popularMoviesTimestap";

export const fetchPopularMovies =
  (
    page: number = 1,
    sortBy: string = "popularity.desc",
    genreId?: number
  ): ThunkAction<void, RootState, unknown, PopularMoviesActionTypes> =>
  async (dispatch) => {
    if (page === 1 && sortBy === "popularity.desc") {
      const cachedData = getCachedData<Movie>(CACHE_KEY, CACHE_TIME_KEY);

      if (cachedData) {
        dispatch({
          type: FETCH_POPULAR_MOVIES_SUCCESS,
          payload: {
            media: cachedData.movies,
            totalPages: cachedData.totalPages,
          },
        });
        return;
      }
    }

    dispatch({ type: FETCH_POPULAR_MOVIES_REQUEST });

    try {
      const response = await axios.get(
        `${TMDB_BASE_URL}${POPULAR_MOVIES_ENDPOINT}`,
        {
          params: {
            api_key: TMDB_API_KEY,
            page,
            sort_by: sortBy,
            with_genres: genreId || undefined,
          },
          timeout: API_TIMEOUT,
        }
      );

      const movies = response.data.results;
      const totalPages = response.data.total_pages;

      if (page === 1) {
        const cachedData = { movies, totalPages };
        setToLocalStorage(CACHE_KEY, JSON.stringify(cachedData));
        setToLocalStorage(CACHE_TIME_KEY, Date.now().toString());
      }

      dispatch({
        type: FETCH_POPULAR_MOVIES_SUCCESS,
        payload: {
          media: movies,
          totalPages,
        },
      });
    } catch (error: any) {
      dispatch({
        type: FETCH_POPULAR_MOVIES_FAILURE,
        payload: error.message,
      });
    }
  };
