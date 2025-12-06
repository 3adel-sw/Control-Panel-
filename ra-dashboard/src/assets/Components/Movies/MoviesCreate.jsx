import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";

export const MoviesCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="genre" />
      <NumberInput source="year" />
      <TextInput source="mainActor.firstName" />
    </SimpleForm>
  </Create>
);

export default MoviesCreate;
