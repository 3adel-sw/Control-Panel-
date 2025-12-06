import {
  Edit,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const ReviewEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="text" />
      <ReferenceInput source="movieId" reference="movies" />
      <NumberInput source="rating" />
    </SimpleForm>
  </Edit>
);
export default ReviewEdit;
