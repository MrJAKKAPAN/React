import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>CMStock</b> LOGIN
          </a>
        </div>
        {/* /.login-logo */}
        <div style= {{background: "whitesmoke", borderRadius: 20 }}  
        className="login-box-body">
          <p className="login-box-msg"><h> Sign in to start your </h></p>
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

           
            {/* Login */}
            <div className="row">
            <div className="col-xs-12">
               <button
                   type="submit"
                   className="btn btn-primary btn-block btn-flat"
               >
                     Sign In
               </button>
            </div>
            </div>

            
            {/* Register */}
            <div className="row">

              <div className="col-xs-12">
                <button
                 onClick={()=>this.props.history.push("/register")}
                  type="submit"
                  style={{marginTop: 8}}
                  className="btn btn-info btn-block btn-flat"
                >
                  Register
                </button>
              </div>
              {/* /.col */}
            </div>
          </form>
        </div>
        {/* /.login-box-body */}
      </div>
    );
  }
}

export default Login;
