import HomeView from "./components/HomeView.vue"
import CategoriesDetails from "./views/CategoriesDetails.vue";
import KeywordDetails from "./views/KeywordDetails.vue";
import MoviesFiltered from "./views/MoviesFiltered.vue";
import SeasonDetails from "./views/SeasonDetails.vue";
import MovieDetail from "./views/MovieDetail.vue";
import SerieDetail from "./views/SerieDetail.vue";
import PersonDetail from "./views/PersonDetail.vue";
import Login from "./views/Login.vue";
import Favorite from "./views/Favorite.vue";
import { RouteRecordRaw } from "vue-router";

export const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTcyMDUxZTNiYzJjNjE1ZWQyMWQ3NGU5YTU1YWM1MCIsIm5iZiI6MTcyNzg2MzgzNC40Mjc0MTMsInN1YiI6IjY2ZjJmNjM3NzMwMGE1YmEyMTNjMGEwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6dR_FDwJCugqXDkN91dLQQ0aAlTOnYkAz7B1m15j2fA"

export const ROUTES: Readonly<RouteRecordRaw[]> = [
  { path: '/', redirect: '/home' },
  { path: '/login', component: Login },
  { path: '/home', component: HomeView },
  { path: '/season-details/:series_id/:season_number', component: SeasonDetails },
  { path: '/movies', component: MoviesFiltered },
  { path: '/movies/keyword/:keyword_id', component: KeywordDetails },
  { path: '/movies/category/:category_id', component: CategoriesDetails },
  { path: '/series/category/:category_id', component: CategoriesDetails },
  { path: '/movie/:id', component: MovieDetail },
  { path: '/serie/:id', component: SerieDetail }, // Añade la ruta para SerieDetail
  { path: '/person/:id', component: PersonDetail },
  { path: '/favorite', component: Favorite },
]

const headers = new Headers();
headers.append("Authorization", `Bearer ${API_KEY}`);

export default headers;

export interface Category {
  [id: string]: string;
}

export const imgBasePath: string = "https://image.tmdb.org/t/p/w500";

export const CATEGORIES: Category = {
  "28": "Action",
  "12": "Adventure",
  "16": "Animation",
  "35": "Comedy",
  "80": "Crime",
  "99": "Documentary",
  "18": "Drama",
  "10751": "Family",
  "14": "Fantasy",
  "36": "History",
  "27": "Horror",
  "10402": "Music",
  "9648": "Mystery",
  "10749": "Romance",
  "878": "Science Fiction",
  "10770": "TV Movie",
  "53": "Thriller",
  "37": "Western",
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"];

export function formatDate(date: string | undefined): string {
  if (date == undefined)
    return "Loading";
  const d = new Date(date);
  return `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

export interface Movie {
  type: string,
  poop: "mine",
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: false,
  vote_average: number,
  vote_count: number,
}

export interface TVSeries {
  type: never,
  poop: "asdf",
  adult: boolean,
  backdrop_path: string,
  first_air_date: string,
  genre_ids: number[],
  id: number,
  name: string,
  origin_country: string[],
  original_language: string,
  original_name: string,
  overview: string,
  popularity: number,
  poster_path: string,
  vote_average: number,
  vote_count: number,
}

export interface GuestStar {
  adult: boolean
  character: string
  credit_id: string
  gender: number
  id: number
  known_for_department: string
  name: string
  order: number
  original_name: string
  popularity: number
  profile_path: string
}

export interface Episode {
  air_date: string
  crew: Object[]
  episode_number: number
  episode_type: string
  guest_stars: GuestStar[]
  id: number
  name: string
  overview: string
  production_code: string
  runtime: number
  season_number: number
  show_id: number
  still_path: string
  vote_average: number
  vote_count: number
}

export interface Season {
  air_date: string
  episodes: Episode[]
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
  vote_average: number
}
