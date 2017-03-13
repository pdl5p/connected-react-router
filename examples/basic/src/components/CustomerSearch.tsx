import * as React from 'react';
import RouterButton from './RouterButton'

//const logo = require('./jasminelogo.jpg');

//{ method: 'POST', credentials: 'include', redirect: 'manual', body: JSON.stringify({ gameId, team }), headers: new Headers({'Content-Type': 'application/json'}) })

class CustomerSearch extends React.Component<any, any>{

    constructor(props){
        super(props);

        this.search = this.search.bind(this);
    }

    private searchBox = null;

    search() {

        let value = this.searchBox.value;

        console.log("Searching for", value);

        const auth = window["crazyContext"];

        auth.acquireToken(auth.config.clientId, (error, token) => {

            console.log("Search", "token", token);

            const options = {
                method: "GET",
                redirect: "manual",
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }),
            }

            fetch(`https://localhost:44324/api/customer?q=${value}`, options)
                .then((response) => {
                    if (response.ok) {
                        console.log("FETCH SUCCESS");
                    } else {
                        throw Error(JSON.stringify({ Status: response.status }));
                    }
                }).catch((error) => {

                    console.error("FETCH ERROR", error);
                });
        });
    }

    public render() {
        return (
            <div>
                <h1>Customer Search</h1>
                <input type="text" ref={(t) => this.searchBox = t} />
                <button onClick={this.search}>Search</button>
                <RouterButton />
            </div>
        )
    }
}

export default CustomerSearch;