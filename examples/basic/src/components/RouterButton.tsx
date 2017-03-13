import * as React from 'react'
import { withRouter } from 'react-router-dom';

const RouterButton = withRouter(({history}) => (
     <button type='button' onClick={() => { history.push('/customer/new') }}>New Customer</button>
));

export default RouterButton;