import {
  DateInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const ActorEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="actorId" reference="actors" />
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <DateInput source="dateOfBirth" />
      <TextInput source="nationality" />
      <TextInput source="id" />
    </SimpleForm>
  </Edit>
);

export default ActorEdit;
