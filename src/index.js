import ReactDom from 'react-dom'
import React from 'react'
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import store from './store/index'
import './index.css'

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
)

ReactDom.render(<App />, document.getElementById('root'))