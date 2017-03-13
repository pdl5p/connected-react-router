import * as React from 'react'

class Home extends React.Component<any, any> {

  logout(){
    let authContext = window["crazyContext"];
    authContext.logOut();
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <button onClick={this.logout}>Sign out</button>
      </div>
    )
  }
}

export default Home;
