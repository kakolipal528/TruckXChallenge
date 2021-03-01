import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/">
            <Auth />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/addRow">
            <AddUsers />
          </Route>
          <Route path="/editRow">
            <EditUsers />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
