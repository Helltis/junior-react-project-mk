import React, { PureComponent } from "react";
import "./plp.scss";
import { Query } from "@apollo/react-components";
import { Link } from "react-router-dom";
import { GET_PRODUCTS } from "../../graphql/getProducts";
import { ProductTile } from "../../components/ProductTile/index";

export class Category extends PureComponent {
  render() {
    const { category, currencyIndex, onAdd } = this.props;
    return (
      <div className="category">
        <Query
          query={GET_PRODUCTS}
          variables={{ category: { title: category } }}
        >
          {({ data, loading, error }) => {
            if (loading) return <p>{`Loading ${category}...`}</p>;
            if (error) return <p>{`Error loading ${category}!`}</p>;
            return (
              <>
                <h1 className="category_title">{data.category.name}</h1>
                <div className="category_products">
                  {data.category.products.map((product) => (
                    <div className="product_tile" key={product.id}>
                      <Link to={`/product/${product.id}`}>
                        <ProductTile
                          product={product}
                          currencyIndex={currencyIndex}
                          onAdd={onAdd}
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
