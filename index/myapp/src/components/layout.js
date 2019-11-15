import React, { Component } from "react";
import { SketchPicker } from 'react-color';



 class layout extends Component {
    


  render() {
    return (
      <div style={{backgroundColor:'red',width:'auto',}} >       
        
        <h2 style={{color:'orange',}}>Wellcom Login </h2>
        <form>
          Username:
          <br />
          <input type="text" name="Username" defaultValue="" />
          <br />
          password:
          <br />
          <input type="password" name="password" defaultValue="" />
          <br />
          <br />
          <button  type="primary" onClick={() => alert('Quy 😎')} >ok</button>
        </form>


      </div>
    );
  }
}
export default layout