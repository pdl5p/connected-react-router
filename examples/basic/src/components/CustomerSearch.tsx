import * as React from 'react';

class CustomerSearch extends React.Component<any, any>{

    search(){
        const auth = window["crazyContext"];

        auth.acquireToken(auth.config.clientId, (error, token) => {

            console.log("Search", "token", token);

            
        });
    }

    public render(){
        return (
            <div>
                <h1>Customer Search</h1>
                <input type="text" />
                <button onClick={this.search}>Search</button>
            </div>
        )
    }
}

export default CustomerSearch;