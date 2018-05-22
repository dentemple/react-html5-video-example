import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import Loadable from "react-loadable"

import HomeText from "../components/HomeText"
import Loading from "../components/Loading"

import logo from "./logo.svg"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">An Example React App</h1>
        </header>
        <Switch>
          <Route exact path="/video" component={LoadableVideoComponent} />
          <Route path="/" component={HomeText} />
        </Switch>
      </div>
    )
  }
}

const LoadableVideoComponent = Loadable({
  loader: () => import("../components/VideoContainer"),
  loading: Loading
})

export default App
