import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout";
// import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Footer from "./components/footer";





function App() {
  return (
    <div className="App">
      <header>
        <Navbar /></header>
        <Layout />
        <br />
        
        <Footer />
    </div>
    
  );
}

export default App;
