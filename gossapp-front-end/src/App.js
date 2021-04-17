import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Chat from "./component/Chat/Chat";
import Login from "./component/Login/Login";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {
  const [user, setUser] = useState(null);

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
