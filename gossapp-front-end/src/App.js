import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Chat from "./component/Chat/Chat";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {
  return (
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
