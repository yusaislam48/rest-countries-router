import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import NotFount from './Components/NotFound/NotFount';
import CountryDetails from './Components/CountryDetails/CountryDetails';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/country/:countryName">
            <CountryDetails></CountryDetails>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFount/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
