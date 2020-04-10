import React from "react";
import Header from "./Components/Header/Header";
import { HashRouter as Router } from "react-router-dom";
import routes from "./route";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {routes}
      </Router>
    </div>
  );
}

export default App;
