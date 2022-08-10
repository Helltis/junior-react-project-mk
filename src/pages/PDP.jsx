import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { ProductContainer } from "../components/ProductContainer";
import { Query } from "@apollo/react-components";
import { gql } from "@apollo/client";

const GET_PRODUCT = gql`
  query {
    product(id: "jacket-canada-goosee") {
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
      <Query query={GET_PRODUCT}>
        {({ data }) => {
          return (
            <div>
              <Navbar />
              <ProductContainer />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default PDP;
