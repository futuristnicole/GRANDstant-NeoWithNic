import gql from "graphql-tag";

const allPhotos = gql`
  query Photos {
    Photo(orderBy: order_asc) {
    id
    file
    alt
    location
    size
    order
    }
  }
`;

export default allPhotos;