import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./store";
import HomePage from './screens/HomePage';
import Category from "./screens/Category";
import SinglePost from "./screens/SinglePost";
import NotFound from "./screens/404";

function App() {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/single">
            <SinglePost />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
