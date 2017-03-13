import * as React from 'react';
import { connect } from 'react-redux';

class Customer extends React.Component<any, any>{

    // go(){

    //     this.props.dispatch()
    // }

    render() {
        return (
            <div>
                Customer
            </div>
        );
    }
}

export default connect()(Customer);