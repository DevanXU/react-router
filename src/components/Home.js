import React, {Component} from "react";
import {Switch, Route, Link} from "react-router-dom";

class Welcome extends Component {
  render () {
    return (
      <div>
        Welcome!
      </div>
    );
  }
}

class Home extends Component {
  render () {
    return (
      <div>
        <Link to='/Home'>Welcome</Link>
        <Switch>
          <Route path='/Home' component={Welcome} />
        </Switch>
      </div>
    )
  }
}

export default Home;
