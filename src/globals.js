import HomeView from "./components/HomeView.vue";
import CategoriesDetails from "./views/CategoriesDetails.vue";
import KeywordDetails from "./views/KeywordDetails.vue";
import MoviesFiltered from "./views/MoviesFiltered.vue";
import SeasonDetails from "./views/SeasonDetails.vue";
import MovieDetail from "./views/MovieDetail.vue";
import SerieDetail from "./views/SerieDetail.vue";
import PersonDetail from "./views/PersonDetail.vue";
import Login from "./views/Login.vue";
import Favorite from "./views/Favorite.vue";
export const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTcyMDUxZTNiYzJjNjE1ZWQyMWQ3NGU5YTU1YWM1MCIsIm5iZiI6MTcyNzg2MzgzNC40Mjc0MTMsInN1YiI6IjY2ZjJmNjM3NzMwMGE1YmEyMTNjMGEwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6dR_FDwJCugqXDkN91dLQQ0aAlTOnYkAz7B1m15j2fA";
export const ROUTES = [
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
];
const headers = new Headers();
headers.append("Authorization", `Bearer ${API_KEY}`);
export default headers;
export const imgBasePath = "https://image.tmdb.org/t/p/w500";
export const CATEGORIES = {
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
};
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"];
export function formatDate(date) {
  if (date == undefined)
    return "Loading";
  const d = new Date(date);
  return `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}
