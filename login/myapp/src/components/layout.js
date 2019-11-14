import React, { Component } from "react";
import { SketchPicker } from 'react-color';



 class layout extends Component {

  render() {
    return (
      <>
        
        <h2>Wellcom </h2>
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
          <input type="submit" defaultValue="Submit" />
        </form>


      </>
    );
  }
}
export default layout