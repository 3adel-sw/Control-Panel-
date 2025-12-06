import { Admin, EditGuesser, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { fetchUtils } from "react-admin";
import { MovieList } from "./assets/Components/Movies/MoviesList";
import { MovieEdit } from "./assets/Components/Movies/MoviesEdit";
import { MoviesCreate } from "./assets/Components/Movies/MoviesCreate";
import { ActorList } from "./assets/Components/Actors/ActorsList";
import ActorEdit from "./assets/Components/Actors/ActorsEdit";
import ActorCreate from "./assets/Components/Actors/ActorsCreate";
import { ReviewList } from "./assets/Components/Reviews/ReviewsList";
import ReviewEdit from "./assets/Components/Reviews/ReviewEdit";
import ReviewCreate from "./assets/Components/Reviews/ReviewCreate";
import MovieIcon from "@mui/icons-material/Movie";
import PeopleIcon from "@mui/icons-material/People";
import RateReviewIcon from "@mui/icons-material/RateReview";

// Use the API root without a trailing slash to avoid URL join issues
const apiUrl = "http://localhost:3004";
const baseProvider = jsonServerProvider(apiUrl);

// Wrap the base provider to provide a fallback when X-Total-Count is missing
const dataProvider = {
  ...baseProvider,
  // Override getList to tolerate missing X-Total-Count header
  async getList(resource, params) {
    try {
      // Try the default behavior first
      return await baseProvider.getList(resource, params);
    } catch (error) {
      // Fallback: fetch all items and compute total from response length
      const url = `${apiUrl}/${resource}`;
      const { json } = await fetchUtils.fetchJson(url);
      const data = Array.isArray(json) ? json : [];
      return { data, total: data.length };
    }
  },
};

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="movies"
      list={MovieList}
      edit={MovieEdit}
      create={MoviesCreate}
      icon={MovieIcon}
    />
    <Resource
      name="actors"
      list={ActorList}
      edit={ActorEdit}
      create={ActorCreate}
      icon={PeopleIcon}
    />
    <Resource
      name="reviews"
      list={ReviewList}
      edit={ReviewEdit}
      create={ReviewCreate}
      icon={RateReviewIcon}
    />
  </Admin>
);

export default App;
