// Import globals
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

// Import components
import Layout from 'components/shared/Layout';
import Home from 'components/pages/Home';
import Crawl from 'components/pages/Crawl';
import Manage from 'components/pages/Manage';
import PageNotFound from 'components/pages/PageNotFound';

// Import notification reducer
import { notifReducer } from 'components/shared/Notification';

// Create and prepend the React app container
const appElement = document.createElement('div');
document.body.prepend(appElement);

// Connect Apollo to graphql server
const graphqlServer = new ApolloClient({
  reduxRootSelector: state => state.graphqlServer,
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8182/data'
  }),
  addTypename: true,
  dataIdFromObject: result => {
    if (result.id && result.__typename) {
      return result.__typename + result.id;
    }
    return null;
  }
});

// see http://dev.apollodata.com/react/redux.html
const store = createStore(
  combineReducers({
    notifications: notifReducer,
    graphqlServer: graphqlServer.reducer()
  }),
  {}, // initial state
  compose(
    applyMiddleware(graphqlServer.middleware()),
    // If you are using the devToolsExtension, you can add it here also
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

ReactDOM.render(
  <ApolloProvider store={store} client={graphqlServer}>
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/crawl" component={Crawl} />
          <Route path="/manage/:type?/:typeId(\d+|add)?" component={Manage} />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </HashRouter>
  </ApolloProvider>,
  appElement
);
