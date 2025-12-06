// import { colors } from "@mui/material";
import { DataTable, List, ReferenceField, EditButton } from "react-admin";

export const ReviewList = () => (
  <List>
    <DataTable>
      <DataTable.Col source="id" />
      <DataTable.Col source="text" />
      <DataTable.Col source="movieId">
        <ReferenceField source="movieId" reference="movies" />
      </DataTable.Col>
      <DataTable.NumberCol source="rating" />
      <EditButton />
    </DataTable>
  </List>
);
export default ReviewList;
