import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

// Components
import App from './components/App'
import Home from './components/Home'
import Quiz from './components/Quiz'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={ store }>
    <Router history={browserHistory}>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="/quiz" component={ Quiz } />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'))
