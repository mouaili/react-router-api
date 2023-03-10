import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Docs from './pages/Docs';
import Community from './pages/Community';
import Tutorial from './pages/Tutorial';
import PageNotFound from './pages/PageNotFound';
import Profile from './components/users/Profile';

import NavBar from './menu/NavBar';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: false,
      underConstruction: {
        Docs: false,
        Community: false,
        Tutorial: true,
      },
    };
  }

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact={true} path="/" component={Docs} />
            <Route path="/community" component={Community} />
            <Route path="/users/:id" component={Profile} />

            {/* <Route
              render={() =>
                this.state.underConstruction.Tutorial ? (
                  <Redirect to="/" />
                ) : (
                  <Tutorial />
                )
              }
            /> */}

            <Route path="/tutorial" component={Tutorial} />

            <Route path="*" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
