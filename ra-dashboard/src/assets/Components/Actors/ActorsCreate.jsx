import {
  Create,
  DateInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const ActorCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="actorId" reference="actors" />
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <DateInput source="dateOfBirth" />
      <TextInput source="nationality" />
      <TextInput source="id" />
    </SimpleForm>
  </Create>
);

export default ActorCreate;
