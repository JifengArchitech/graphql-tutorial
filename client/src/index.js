import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Persons from './Persons'
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  uri: 'http://localhost:3010/graphql'
})

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Persons />
    </div>
  </ApolloProvider>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
