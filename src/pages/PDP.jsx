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
      gallery
      description
    }
  }
`;

export class PDP extends Component {
  render() {
    return (
      <Query query={GET_PRODUCT} variables={{ productId: "xbox-series-s" }}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{error}</p>;
          console.log(data);
          return (
            <div>
              <Navbar />
              <ProductContainer product={data.product} />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default PDP;
