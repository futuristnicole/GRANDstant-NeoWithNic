import gql from "graphql-tag";

const AddPerson = gql`
  mutation CreatePerson($name: String!, $description: String!) {
    CreatePerson(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;
export default AddPerson;