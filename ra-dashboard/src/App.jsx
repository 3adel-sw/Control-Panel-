import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("http://localhost:3004/");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="movies" />
  </Admin>
);

export default App;
