import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import data from "../data.json";
import Company from "./components/Company";
import Terms from "./components/Company/Terms";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: data.sites,
    };
  }
  async componentDidMount() {}

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Company} />
          <Route path="/sites" component={Company} />
          <Route path="/terms" exact component={Terms} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Routes);
