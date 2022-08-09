import React, { Component } from "react";
import "./plp.scss";
import Product from "../components/Product";
import Navbar from "../components/Navbar";
import { gql } from "@apollo/client";
import { Query } from "@apollo/react-components";

const query = gql`
  query category($input: CategoryInput) {
    category(input: $input) {
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
      }
    }
  }
`;

export class Category extends Component {
  render() {
    return (
      <div className="category">
        <Navbar />
        <Query query={query} variables={{ title: "all" }}>
          {({ data, loading, error }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>ERROR!!!!</p>;
            console.log(data.category.products);
            return (
              <>
                <h1 className="category_title">{data.category.name}</h1>
                <div className="category_products">
                  {data.category.products.map((product) => (
                    <Product key={product.id} product={product} />
                  ))}
                </div>
              </>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Category;
