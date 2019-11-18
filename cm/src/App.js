import React, { Component } from "react";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Register from "./components/register/register";


/*Route*/
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

export default class App extends Component {
  /*redirect ให้ขึ้นหน้า LOgin ก่อน*/
  redirectToLogin = () => {
    return <Redirect to="/Login" />;
  };

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Menu />

          <Route path="/login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route exact={true} path="/" component={this.redirectToLogin}/>

          {/* ถ้า user พิมมามั่วๆเช่น /ฟหกฟหกsdad จะให้มันไป ที่ Login */}
          <Route exact={true} path='*' component={this.redirectToLogin}/>
          
          
          <Footer />
        </div>
      </Router>
    );
  }
}
