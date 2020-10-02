import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";
import {StoreProvider} from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
        <Navbar />
        <Wrapper>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Wrapper>
        <Footer />
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
