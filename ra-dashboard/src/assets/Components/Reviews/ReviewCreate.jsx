import {
  Create,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const ReviewCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="text" />
      <ReferenceInput source="movieId" reference="movies" />
      <NumberInput source="rating" />
    </SimpleForm>
  </Create>
);
export default ReviewCreate;
