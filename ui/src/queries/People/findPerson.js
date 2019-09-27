import gql from "graphql-tag";

const FindPerson = gql`
    query FindPerson($id: ID!) {
        Person(id: $id) {
            name
            id
        }
    }
`;

export default FindPerson;