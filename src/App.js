import './App.scss';
import Registration from './views/Registration/Registration';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Registration}  />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
