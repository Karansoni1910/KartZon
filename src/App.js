import "./App.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
// import { Body } from "./components/Body";
// import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
                  <Footer />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <Header showAbout />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
