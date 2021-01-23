//Within the main app component, we have the barebone structure. 
//I will open with a React fragment as the functional component needs that to return all the other components
//Then I will include the Navbar, and the Switch component to outline the different file paths in this project.
//There are 4 paths, and 1 error path that will return an error page should the user key in anything other than the 4 paths.

import React from "react";
import "./App.css";


import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import SingleReview from "./pages/SingleReview";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";

import ScrollToTop from "./scrollToTop";



function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/reviews/" component={Reviews} />
        <Route exact path="/reviews/:slug" component={SingleReview} />
        <Route component={Error} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;