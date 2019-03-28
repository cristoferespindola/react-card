import React, { Component } from 'react';

import './App.scss';
import Card from "./card/card";
import Header from "../component/header/header";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col mb-3 dk-3">
            <Header jobTitle={"Front-end"} name={"Lagoa"}></Header>
          </div>
        </div>
        <div className="row">
          <Card class={"col col--mb-3 col--dk-2"} name={"Venice"} country={"Italy"}></Card>
          <Card class={"col col--mb-3 col--dk-1"} name={"Berlin"} country={"Germany"}></Card>
          <Card class={"col col--mb-3 col--dk-1"} name={"Barcelona"} country={"Spain"}></Card>
          <Card class={"col col--mb-3 col--dk-1"} name={"Paris"} country={"France"}></Card>
          <Card class={"col col--mb-3 col--dk-1"} name={"Amsterdam"} country={"Netherlands"}></Card>
          <Card class={"col col--mb-3 col--dk-2"} name={"London"} country={"United Kingdom"}></Card>
        </div>
      </div>
    );
  }
}

export default App;
