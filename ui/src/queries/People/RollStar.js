import gql from "graphql-tag";

const RollStar = gql`
  query RollStar {
    Roll(type: STAR){
      id
      type
      name
      person {
        id
        name
      }
    }
  }
`;

export default RollStar;