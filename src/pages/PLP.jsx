import React, { Component } from "react";
import "./plp.scss";
import Product from "../components/Product";
import { gql } from "@apollo/client";
import { Query } from "@apollo/react-components";
import { Link } from "react-router-dom";

const GET_PRODUCTS = gql`
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
export class Category extends Component {
  render() {
    return (
      <div className="category">
        <Query
          query={GET_PRODUCTS}
          variables={{ category: { title: this.props.category } }}
        >
          {({ data, loading, error }) => {
            if (loading) return <p>{`Loading ${this.props.category}...`}</p>;
            if (error) return <p>{`Error loading ${this.props.category}!`}</p>;
            return (
              <>
                <h1 className="category_title">{data.category.name}</h1>
                <div className="category_products">
                  {data.category.products.map((product) => (
                    <div className="product_tile" key={product.id}>
                      <Link to={`/product/${product.id}`}>
                        <Product
                          product={product}
                          currencyIndex={this.props.currencyIndex}
                          onAdd={this.props.onAdd}
                        />
                      </Link>
                    </div>
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
