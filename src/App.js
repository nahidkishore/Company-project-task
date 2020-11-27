import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Home/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Home/Login/Login";
import { createContext, useState } from "react";
import Certificates from "./components/Home/Certificates/Certificates";
import NotFound from "./components/Home/NotFound/NotFound";
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="/certificate">
            <Certificates></Certificates>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
