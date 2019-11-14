import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout";
// import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Box from "./components/box";




function App() {
  return (
    <div className="App">
      <header>
        <Navbar /></header>
        <Layout />
        <div></div>
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        <Box />
      
    </div>
    
  );
}

export default App;
