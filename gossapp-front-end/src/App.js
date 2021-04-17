import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Chat from "./component/Chat/Chat";
import Login from "./component/Login/Login";
import Sidebar from "./component/Sidebar/Sidebar";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return !user ? (
    <Login />
  ) : (
    <div className="app">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/rooms/:roomId">
            <Chat />
          </Route>
          <Route path="/">{/* <Chat /> */}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
