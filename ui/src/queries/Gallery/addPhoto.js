import gql from "graphql-tag";

const AddPhoto = gql`
  mutation CreatePhoto($file: String!, $alt: String!, $location: Location!, $size: String!){
  CreatePhoto(file: $file, alt: $alt, location: $location, size: $size) {
    file
    alt
    location
    size
  }
} 
`;
export default AddPhoto;