import { Query, client, CombinedField } from "@tilework/opus";
import React, { Component } from "react";
// import { gql } from "@apollo/client";
// import { Query } from "@apollo/react-components";

// const CATEGORIES = gql`
//   {
//     categories {
//       name
//     }
//   }
// `;

export class Data extends Component {
  state = { currencies: [], categories: [] };
  componentDidMount = async () => {
    const categories = new Query("categories", true).addField("name");
    const currency = new Query("currencies", true)
      .addField("label")
      .addField("symbol");
    const result = await client.post(
      new CombinedField().add(categories).add(currency)
    );
    this.setState({
      currencies: result.currencies,
      categories: result.categories,
    });
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.currencies.map((el) => (
            <p key={el.label}>
              {el.label} <span>{el.symbol}</span>{" "}
            </p>
          ))}
        </ul>
        {/* <Query query={CATEGORIES}>
          {({ loading, error, data }) => {
            if (loading) return <h1>loading</h1>;
            if (error) console.log(error);
            return data.categories.map(({ name }) => <p>{name}</p>);
          }}
        </Query> */}
      </div>
    );
  }
}

export default Data;
