import React from 'react'
import { connect } from 'react-redux'
import { inputChangeAction, addItemAction, deleteItemAction, getList } from './store/actionCreators'


class TodoList extends React.Component {

  componentDidMount() {
    this.props.getInitList()
  }

  render() {
    const { inputValue, list, inputChange, addItem, deleteItem } = this.props

    return (
      <div className="container">
        <input type="text" value={inputValue} onChange={inputChange} />
        <button onClick={addItem}>提交</button>
        <ul>
          {
            list.map((item, index) => <li key={index} onClick={() => deleteItem(index)}>{item}</li>)
          }
        </ul>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    inputValue: state.todoReducer.inputValue,
    list: state.todoReducer.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    inputChange(e) {
      const action = inputChangeAction(e.target.value)
      dispatch(action)
    },
    addItem() {
      const action = addItemAction()
      dispatch(action)
    },
    deleteItem(index) {
      const action = deleteItemAction(index)
      dispatch(action)
    },
    getInitList() {
      const action = getList()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)