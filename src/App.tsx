import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Showcase from "./pages/Showcase";
import Contact from "./pages/Contact";
import data from "./data/settings.json";
const { banner } = data.homePage;

function App() {
  return (
    <React.Fragment>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={() => <Home content={banner} />} />
          <Route path="/about" component={() => <About />} />
          <Route path="/showcase" component={() => <Showcase />} />
          <Route path="/contact" component={() => <Contact />} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
