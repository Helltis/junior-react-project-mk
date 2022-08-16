import React, { Component } from "react";
import { ProductContainer } from "../components/ProductContainer";
import { Query } from "@apollo/react-components";
import { gql } from "@apollo/client";
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";

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

export class PDP extends Component {
  render() {
    const url = window.location.href;
    const id = url.split("/")[3];
    return (
      <Query query={GET_PRODUCT} variables={{ productId: id }}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{error}</p>;
          return (
            <div>
              <ProductContainer
                product={data.product}
                currencyIndex={this.props.currencyIndex}
              />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default PDP;
