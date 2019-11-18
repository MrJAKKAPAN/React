import React, { Component } from 'react';

class Register extends Component {
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
          <form action="../../index2.html" method="post">
            <div className="form-group has-feedback">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>
            

            {/* Register */}
            <div className="row">
            <div className="col-xs-12">
               <button
                   type="submit"
                   className="btn btn-primary btn-block btn-flat"
               >
                     Register
               </button>
            </div>
            </div>

             {/* cancel*/}
             <div className="row">
            <div className="col-xs-12">
               <button
                   type="submit"
                   className="btn btn-primary btn-block btn-flat"
               >
                     Register
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
