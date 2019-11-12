import React, { Component } from 'react';

export default class App extends Component {
  
  count = 0
    constructor(props) {
      
      super(props)
    
      this.state = {
        clock:0     
      }
    }

    
  render() {
    
    return (
      
      //JSX (XML + JAVA Script)
      <div>
        <h1> Hello word {Math.random()} </h1>  
        <h1> NUmber { 1+2 } </h1>  
        <h1 onClick={()=> {
          this.count++
          this.setState({clock: this.state.clock+1})
          console.log("coun: " + this.count)
        }}> count{ this.count } </h1>  
      </div>
    )
  }
}
