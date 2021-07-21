import "./App.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./components/Details";
import { Body } from "./components/Body";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <Header />
                  <Home />
                  <Footer />
                </>
              );
            }}
          ></Route>
          <Route exact path="/powerbank">
            <Header />
            <Body category="powerbank" />
            <Footer />
          </Route>
          <Route exact path="/speaker">
            <Header />
            <Body category="speaker" />
            <Footer />
          </Route>
          <Route exact path="/laptop">
            <Header />
            <Body category="laptop" />
            <Footer />
          </Route>
          <Route exact path="/mobile">
            <Header />
            <Body category="mobile" />
            <Footer />
          </Route>
          <Route exact path="/keyboard">
            <Header />
            <Body category="keyboard" />
            <Footer />
          </Route>
          <Route exact path="/mouse">
            <Header />
            <Body category="mouse" />
            <Footer />
          </Route>
          <Route exact path="/earphone">
            <Header />
            <Body category="earphone" />
            <Footer />
          </Route>
          <Route exact path="/headphone">
            <Header />
            <Body category="headphone" />
            <Footer />
          </Route>
          <Route exact path="/usb">
            <Header />
            <Body category="usb" />
            <Footer />
          </Route>
          <Route exact path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route exact path="/details/:id">
            <Header />
            <Details />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
