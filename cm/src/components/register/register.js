import React, { Component } from 'react';
import {httpClient} from './../../utils/HttpClient';


class Register extends Component {
  
  constructor(props) {
  super(props)

  this.state = {
     username:"",
     password:""
  }
}
 
// Arrow Function to Register
onClickRegister =  ()=>{

  // let data ={username:"admin", password: "1234"}
  //   Axios.post("http://localhost:8085/api/v2/authen/register",data).then(response=>{
  //     alert(JSON.stringify(response.data))
  //   })
  httpClient.post(server.REGISTER_URL, this.state).then(response=>{
    alert(JSON.stringify(response.data))
  })
}
 

  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>CMStock</b> Register
          </a>
        </div>
        {/* /.login-logo */}
        <div style= {{background: "whitesmoke", borderRadius: 20 }}  
        className="login-box-body">
          <p className="login-box-msg"><h> Register </h></p>
          <form>

            {/* username */}
            <div className="form-group has-feedback">
              <input
                onChange={e=>this.setState({username: e.target.value})}
                type="username"
                className="form-control"
                placeholder="Username"
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>

            {/* password */}
            <div className="form-group has-feedback">
              <input
                // ดักค่า onChang
                onChange={e=>this.setState({password: e.target.value})}
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>
           
      {/* ไว้เทส ว่าของมูส่งไปรึป่าว      */}
    {/* <span>#Debug:{JSON.stringify(this.state)}</span> */}


            {/* Register */}
            <div className="row">
            <div className="col-xs-12">
               <button
                   onClick={this.onClickRegister}
                   type="submit"
                   
                   className="btn btn-success btn-block btn-flat"
               >
                     Register   
               </button>
            </div>
            </div>

             {/* cancel*/}
             <div className="row">
            <div className="col-xs-12">
               <button
                   onClick={(e)=>
                    {
                    // ไม่ให้หน้าเว็บรีเฟรช   
                    e.preventDefault();

                    this.props.history.goBack()}
                    }
                    style={{marginTop: 8}}
                    className="btn btn-danger btn-block btn-flat"
               >
                     cancel
               </button>
            </div>
            </div>
          </form>
        </div>
        {/* /.login-box-body */}
      </div>
    );
  }
}

export default Register;
