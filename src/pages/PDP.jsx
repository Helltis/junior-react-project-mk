import React, { Component } from "react";
import Navbar from "../components/Navbar";
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
  state = { currencyIndex: 0 };

  setCurrency = (currencyIndex) => {
    this.setState({ currencyIndex: currencyIndex });
  };
  render() {
    return (
      <Query query={GET_PRODUCT} variables={{ productId: "apple-imac-2021" }}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{error}</p>;
          console.log(data);
          return (
            <div>
              <Navbar setCurrency={this.setCurrency} />
              <ProductContainer
                product={data.product}
                currencyIndex={this.state.currencyIndex}
              />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default PDP;
