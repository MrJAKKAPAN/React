import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <b>Version</b> 2.4.0
        </div>
        <strong>
          Copyright © 2014-2016{" "}
          <a href="https://www.facebook.com/jakkapan.sitthikan.3">Jakkapan Studio</a>.
        </strong>{" "}
        All rights reserved.
      </footer>
    );
  }
}

export default Footer;
