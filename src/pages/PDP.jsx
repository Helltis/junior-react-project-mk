import React, { PureComponent } from "react";
import { ProductContainer } from "../components/ProductContainer";
import { Query } from "@apollo/react-components";
import { gql } from "@apollo/client";

const GET_PRODUCT = gql`
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

export class PDP extends PureComponent {
  render() {
    const url = window.location.href;
    const id = url.split("/")[4];
    return (
      <Query query={GET_PRODUCT} variables={{ productId: id }}>
        {({ data, loading, error }) => {
          if (loading) return <p>{`Loading ${id} page...`}</p>;
          if (error) return <p>{`ERROR loading ${id} page!`}</p>;
          return (
            <div>
              <ProductContainer
                product={data.product}
                currencyIndex={this.props.currencyIndex}
                onAdd={this.props.onAdd}
              />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default PDP;
