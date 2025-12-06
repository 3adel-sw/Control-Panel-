import {
  DataTable,
  EditButton,
  ReferenceField,
  DeleteButton,
  List,
} from "react-admin";
import { Link } from "react-router-dom";

export const MovieList = () => (
  <List>
    <DataTable rowClick={false}>
      <DataTable.Col source="id" />
      <DataTable.NumberCol source="views" />
      <DataTable.Col source="title" />

      <DataTable.Col
        source="mainActor"
        label="Primary Actor"
        render={(record) =>
          record?.mainActor ? (
            <Link
              to={`/actors/${record.mainActor.actorId}`}
              style={{
                cursor: "pointer",
                color: "blue",
                textDecoration: "underline",
              }}
            >
              {record.mainActor.firstName} {record.mainActor.lastName}
            </Link>
          ) : (
            "N/A"
          )
        }
      />
      {<ReferenceField source="actorId" reference="actors" />}
      <DataTable.NumberCol source="year" label="Year Of Release" />
      <DataTable.Col source="genre" />
      <EditButton
        style={{
          color: "rgb(0 146 255)",
          backgroundColor: "rgb(255, 255, 255)",
          border: "1px solid rgb(80, 92, 101)",
          borderRadius: "4px",
          padding: "4px 8px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "bold",
          textTransform: "uppercase",
          textDecoration: "none",
          transition:
            "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
          ":hover": {
            backgroundColor: "rgb(80, 92, 101)",
            color: "rgb(255, 255, 255)",
          },
        }}
      />
      <DeleteButton
        style={{
          color: "red",
          backgroundColor: "rgb(80, 92, 101)",
          border: "1px solid rgb(80, 92, 101)",
          borderRadius: "4px",
          padding: "4px 8px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "bold",
          textTransform: "uppercase",
          textDecoration: "none",
          transition:
            "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
          ":hover": {
            backgroundColor: "rgb(255, 255, 255)",
            color: "rgb(80, 92, 101)",
          },
        }}
      />
    </DataTable>
  </List>
);
export default MovieList;
