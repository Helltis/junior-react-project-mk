import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getCategory($category: CategoryInput) {
    category(input: $category) {
      name
      products {
        id
        name
        inStock
        gallery
        brand
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
      }
    }
  }
`;
