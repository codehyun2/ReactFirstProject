import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route basename={process.env.PUBLIC_URL} path="/movie/:id">
          <Detail>

          </Detail>
        </Route>

        <Route basename={process.env.PUBLIC_URL} path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
