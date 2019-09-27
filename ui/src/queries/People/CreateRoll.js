import gql from "graphql-tag";

const CreateRoll = gql`
  mutation CreateRoll($name: String!, $type: String!) {
    CreateRoll(name: $name, type: $type) {
      id
      name
      type
    }
  }
`;

export default CreateRoll;