import { AppContainer } from 'react-hot-loader'
import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Login from './components/Login';

import rootReducer from './reducers'

const history = createBrowserHistory()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
)

function startUpWhenNotLoggedIn() {

  const renderLogin = () => {
    ReactDOM.render(
      <Login />,
      document.getElementById('react-root')
    )
  }

  renderLogin();

  if (module.hot) {
    module.hot.accept('./components/Login', () => {
      renderLogin()
    })
    module.hot.accept('./reducers', () => {
      store.replaceReducer(connectRouter(history)(rootReducer))
    })
  }


}

function startUpWhenLoggedIn() {

  const render = () => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <App history={history} />
        </Provider>
      </AppContainer>,
      document.getElementById('react-root')
    )
  }

  render()

  if (module.hot) {
    module.hot.accept('./App', () => {
      render()
    })
    module.hot.accept('./reducers', () => {
      store.replaceReducer(connectRouter(history)(rootReducer))
    })
  }
}

window.config = {
  instance: 'https://login.microsoftonline.com/',
  tenant: '5pdev.onmicrosoft.com',
  clientId: 'abea6b46-261e-4db4-890c-af28a0e45760',
  postLogoutRedirectUri: window.location.origin,
  cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
};

var authContext = new AuthenticationContext(config);
window.crazyContext = authContext;

var isCallback = authContext.isCallback(window.location.hash);
console.log("IsCallback", isCallback);

if (isCallback) {

  authContext.handleWindowCallback();

  var loginError = authContext.getLoginError();

  if (isCallback && !loginError) {
    window.location = authContext._getItem(authContext.CONSTANTS.STORAGE.LOGIN_REQUEST);
  }
}
else 
{
  var user = authContext.getCachedUser();
  console.log("checkpoint");

  if (user) {
    console.log("User", user);
    setTimeout(() => {
    }, 300);
    startUpWhenLoggedIn();
  } else {
    console.log("No user");
    startUpWhenNotLoggedIn();
  }
}
