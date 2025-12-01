import { DataTable, DateField, List, ReferenceField } from "react-admin";

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
    </DataTable>
  </List>
);
export default ActorList;
