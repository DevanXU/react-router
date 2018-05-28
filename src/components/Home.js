import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

const About = () => {
  console.log("About rendering ...");
  return <div>About</div>;
};

class Welcome extends Component {
  render() {
    console.log("Welcome rendering ...");
    return (
      <div>
        <h1>Welcome to China!</h1>
      </div>
    );
  }
}

class Home extends Component {
  render() {
    console.log("Home rendering ...");
    return (
      <div>
        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Welcome">Welcome</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/Welcome" component={Welcome} />
          <Route path="/About" component={About} />
        </Switch>
      </div>
    );
  }
}

export default Home;
