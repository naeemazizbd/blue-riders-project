import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import SearchResult from "./components/SearchResult/SearchResult";
import BaseMap from "./components/BaseMap/BaseMap";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App " >

      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header />
          <Switch>

            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/service-details/:id">
              <ServiceDetail />
            </PrivateRoute>
            <PrivateRoute path="/search-result">
              <SearchResult />
            </PrivateRoute>
            <PrivateRoute path="/map">
              <BaseMap />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/*">
              <NotFound />
            </Route>

          </Switch>
          <Footer />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
