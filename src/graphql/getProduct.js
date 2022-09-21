import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query getProduct($productId: String!) {
    product(id: $productId) {
      id
      name
      brand
      gallery
      description
      inStock
      prices {
        amount
        currency {
          label
          symbol
        }
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
`;
