import { DataTable, List } from "react-admin";

export const MovieList = () => (
  <List>
    <DataTable>
      <DataTable.Col source="id" />
      <DataTable.NumberCol source="views" />
      {/* <DataTable.Col source="Primary Actor" /> */}
      <DataTable.Col source="title" />
      {/* <DataTable.NumberCol source="IMDB Rank" label="IMDB Rank" /> */}
      <DataTable.NumberCol source="year" label="Year Of Release" />
      <DataTable.Col source="genre" />
    </DataTable>
  </List>
);
export default MovieList;
