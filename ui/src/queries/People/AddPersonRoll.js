import gql from "graphql-tag";

const AddPersonRoll = gql`
  mutation AddPersonRoll($PersonInput: ID!, $RollInput: ID!){
  AddPersonRoll(
    from: {
      id: $PersonInput
    }
    to: {
        id: $RollInput
    }
  ) { 
    from {
      id
      name
    }

    to {
      id
      name
    }
  }
}
`;
export default AddPersonRoll;