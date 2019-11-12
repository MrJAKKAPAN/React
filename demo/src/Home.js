import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
     


    return (
      <div style={{ padding: 40 } }>
        <h1 style={{color: "red ", backgroundColor:'gray'}}> Login </h1>

        <form >
           Username:
          <br />
          <input onChange={(e)=>{this.setState({username: e.target.value}) }}  type="text" name="Username" defaultValue="" />
          <br />
           password:
          <br />
          <input onChange={(e)=>{this.setState({password: e.target.value}) }} type="text" name="password" defaultValue="" />
          <br />
          <br />
          <span>#debug: {(JSON.stringify(this.state))}</span>
          <button onClick={()=> {alert(JSON.stringify(this.state)) } }>Login</button>
        </form>
      </div>
    );
  }
}
