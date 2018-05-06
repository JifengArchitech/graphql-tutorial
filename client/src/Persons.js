import React from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Persons = () => (
  <Query
    query={gql`
      {
        allPersons {
          name
          address
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.allPersons.map(({ name, address }) => (
        <div key={name}>
          <p>{`${name}: ${address}`}</p>
        </div>
      ));
    }}
  </Query>
);

export default Persons
