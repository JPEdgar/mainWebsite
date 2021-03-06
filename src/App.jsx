import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
import "./styles.css";

// libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// pages
import MainPage from "./pages/MainPage";
import Home from "./pages/Home";
import Books from "./pages/Books";
import About from "./pages/About";
import Store from "./pages/Store";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

// custom components
import Footer from "./components/Footer";

function App() {
  return (
    <div className="test">
      <Container style={{ backgroundColor: "#050505" }}>
        <Router>
          <MainPage />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/books" component={Books} />
            <Route path="/store" component={Store} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
        <Footer />
      </Container>
    </div>
  );
}

export default App;