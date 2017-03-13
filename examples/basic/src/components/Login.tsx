import * as React from 'react';

class Login extends React.Component<any, any>{

    login(){
        let authContext: any = window["crazyContext"];
        console.log("crazyContext", window["crazyContext"]);
        authContext.login();
    }
    render() {
        return (
            <div>
                <h1>Login here</h1>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default Login;
