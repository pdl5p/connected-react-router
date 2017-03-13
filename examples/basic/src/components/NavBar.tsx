import * as React from 'react'
import { Link } from 'react-router-dom'

const { Component } = React;

class NavBar extends Component<any, any>{

  logout(event){
    event.preventDefault();
    console.log("Logging out...");

    let authContext = window["crazyContext"];
    authContext.logOut();
  }

  render() {
    return (
      <div>
        <div><Link to="/">Home</Link>
          <Link to="/hello">Hello</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/customersearch">Customer Search</Link>
          <a href="#" onClick={(e) => this.logout(e)}>Logout</a>
        </div>
      </div>
    )
  }
}
export default NavBar
