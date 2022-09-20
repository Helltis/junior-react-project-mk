import React, { PureComponent } from "react";
import { ProductContainer } from "../../containers/ProductDisplay";
import { Query } from "@apollo/react-components";
import { GET_PRODUCT } from "../../graphql/getProduct";

export class PDP extends PureComponent {
  render() {
    const url = window.location.href;
    const id = url.split("/")[4];
    const { currencyIndex, onAdd } = this.props;
    return (
      <Query query={GET_PRODUCT} variables={{ productId: id }}>
        {({ data, loading, error }) => {
          if (loading) return <p>{`Loading ${id} page...`}</p>;
          if (error) return <p>{`ERROR loading ${id} page!`}</p>;
          return (
            <div>
              <ProductContainer
                product={data.product}
                currencyIndex={currencyIndex}
                onAdd={onAdd}
              />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default PDP;
