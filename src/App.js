import "./App.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./components/Details";
import { Body } from "./components/Body";
import SignIn from "./components/SignIn";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <Home />
                </>
              );
            }}
          ></Route>
          <Route exact path="/powerbank">
            <Body category="powerbank" />
          </Route>
          <Route exact path="/speaker">
            <Body category="speaker" />
          </Route>
          <Route exact path="/laptop">
            <Body category="laptop" />
          </Route>
          <Route exact path="/mobile">
            <Body category="mobile" />
          </Route>
          <Route exact path="/keyboard">
            <Body category="keyboard" />
          </Route>
          <Route exact path="/mouse">
            <Body category="mouse" />
          </Route>
          <Route exact path="/earphone">
            <Body category="earphone" />
          </Route>
          <Route exact path="/headphone">
            <Body category="headphone" />
          </Route>
          <Route exact path="/usb">
            <Body category="usb" />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route path="/:id">
            <Details />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
