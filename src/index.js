import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import App from './layout/App'
import cartReducer from './reducers'

import './index.css'

const store = createStore(cartReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));