import {
  DataTable,
  DateField,
  DeleteButton,
  EditButton,
  List,
  ReferenceField,
} from "react-admin";

export const ActorList = () => (
  <List>
    <DataTable>
      <DataTable.Col source="actorId">
        <ReferenceField source="actorId" reference="actors" />
      </DataTable.Col>
      <DataTable.Col source="firstName" />
      <DataTable.Col source="lastName" />
      <DataTable.Col source="dateOfBirth">
        <DateField source="dateOfBirth" />
      </DataTable.Col>
      <DataTable.Col source="nationality" />
      <DataTable.Col source="id" />
      <EditButton />
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
export default ActorList;
