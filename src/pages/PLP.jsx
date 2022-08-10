import React, { Component } from "react";
import "./plp.scss";
import Product from "../components/Product";
import Navbar from "../components/Navbar";
import { gql } from "@apollo/client";
import { Query } from "@apollo/react-components";

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
      }
    }
  }
`;

export class Category extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "tech", currencyIndex: 0 };
  }

  setCategory = (newCategory) => {
    this.setState({ title: newCategory });
  };

  setCurrency = (currencyIndex) => {
    this.setState({ currencyIndex: currencyIndex });
  };

  render() {
    console.log(this.state);
    return (
      <div className="category">
        <Navbar setCategory={this.setCategory} setCurrency={this.setCurrency} />
        <Query
          query={GET_PRODUCTS}
          variables={{ category: { title: this.state.title } }}
        >
          {({ data, loading, error }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>ERROR!!!!</p>;
            console.log(data.category.products);
            return (
              <>
                <h1 className="category_title">{data.category.name}</h1>
                <div className="category_products">
                  {data.category.products.map((product) => (
                    <Product
                      key={product.id}
                      product={product}
                      currencyIndex={this.state.currencyIndex}
                    />
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
