import React from 'react'
import store from './store/index'
import { inputChangeAction, addItemAction, deleteItemAction, getList } from './store/actionCreators'
import axios from 'axios'

class TodoList extends React.Component {

  // http://mock-api.com/wnapNXg1.mock/list
  constructor(props) {
    super(props)
    this.state = store.getState().todoReducer
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleBtnDelete = this.handleBtnDelete.bind(this) 
    store.subscribe(() => this.setState(store.getState().todoReducer))
  }


  componentDidMount() {
    const action = getList()
    store.dispatch(action)
  }

  handleBtnClick() {
    store.dispatch(addItemAction())
  }

  handleInputChange(e) {
    const value = e.target.value
    store.dispatch(inputChangeAction(value))
  }

  handleBtnDelete(index) {
    store.dispatch(deleteItemAction(index))
  }


  render() {
    return (
      <div className="container">
        <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
        <button onClick={this.handleBtnClick}>提交</button>
        <ul>
          {
            this.state.list.map((item, index) => <li key={index} onClick={() => this.handleBtnDelete(index)}>{item}</li>)
          }
        </ul>
      </div>
    )
  }

}






export default TodoList