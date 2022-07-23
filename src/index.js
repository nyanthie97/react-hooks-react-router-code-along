import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom"

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
  
}
function About() {
  return (
    <div>
      <h1>This is ze where abouts! </h1>
    </div>
  )
}
function Login() {
  return (
    <div>
      <h1>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <input type="text" name="password" placeholder="Password" />
          </div>
        </form>
      </h1>
    </div>
  )
}
function NavBar() {
  const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white"
  }
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}>
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}>
        About
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}>
        Login
      </NavLink>
    </div>
  )
}

function App() {
  return <Home />;
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>

  )
}

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));

