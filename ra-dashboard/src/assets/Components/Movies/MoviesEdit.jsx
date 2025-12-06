import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export const MovieEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="genre" />
      <NumberInput source="year" />
      <TextInput source="mainActor.firstName" />
    </SimpleForm>
  </Edit>
);

export default MovieEdit;
