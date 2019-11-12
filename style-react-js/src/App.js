import React, { Component } from "react";
import "./App.css";
import Clock from "./Clock";

 class CMEntry extends Component {
  render() {

      //Destructuring
      const{label, defaultValue} =this.props

    return (
      <div>
         <span className="label"> {this.props.label}:</span>
          <br />
          <input type="text" name="username" defaultValue={this.props.defaultValue} />
      </div>
    )
  }
}


export default class App extends Component {
  constructor(props) {
    super(props);

      this.state = {count: 0}

      //นับเพิ่มทีละ 1 ทุกๆ 1 วินาที && เหมือนนาฬิกาจับเวลา
      setInterval(()=>{
        this.setState({count: this.state.count + 1})
      }, 1000)
  }

  render() {
    return ( 
      <div style={{ padding: 50 }}>
        <h1 className="App">Login</h1>
        <Clock count = {this.state.count}/>   

        <form>
          <CMEntry label="Firstname" defaultValue="Admin"/>
          <br />
          <CMEntry label="Lastname" defaultValue="kub"/>
          <br />
          <br />
          <input type="submit" defaultValue="Submit" />
        </form>
      </div>
    );
  }
}
