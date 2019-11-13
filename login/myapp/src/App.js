import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "./components/layout"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import Slidebar from "./components/slidebar"

class App extends Component {
  render() {
    return(
      <div className="App"> 
        <Navbar/>
        <div>
          
        </div>
         
        <Footer/>
        <div>
        
        </div>
      </div>
          
    ) 
  }
}

// function App() {
//   return (
    
//         <div className="App">
//           <div>
//             <Footer>
//           </div>
//         </div>
    
//   );
// }

export default App 
