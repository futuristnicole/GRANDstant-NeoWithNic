import gql from "graphql-tag";

const DeletePerson = gql`
mutation DeletePerson($id: ID!) {
    DeletePerson(id: $id) {
      id
    }
  }
`;
export default DeletePerson;