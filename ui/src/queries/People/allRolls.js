import gql from "graphql-tag";

const Rolls = gql`
 query AllRoles {
  Roll {
    id
    name
    type
  }
}
`;

export default Rolls;