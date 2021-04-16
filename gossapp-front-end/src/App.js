import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Chat from "./component/Chat/Chat";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/app">
            <Sidebar />
            <Chat />
          </Route>
          <Route path="/">
            <h1>Home Screen</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
