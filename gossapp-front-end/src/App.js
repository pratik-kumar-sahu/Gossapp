import "./App.css";
import Chat from "./component/Chat/Chat";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
