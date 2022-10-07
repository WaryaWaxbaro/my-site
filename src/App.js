import React from "react";
import Nav from "./components/Nav";
import Container from "./components/Container";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        {["", "my-site", "about", "skills", "project", "contact"].map(
          (name) => (
            <Route
              exact
              path={`/${name}`}
              key={name}
              element={<Container name={name} />}
            />
          )
        )}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
