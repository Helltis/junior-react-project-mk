import { gql } from "@apollo/client";

export const GET_NAVBAR_DATA = gql`
  {
    categories {
      name
    }
    currencies {
      label
      symbol
    }
  }
`;
