import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM, INIT_LIST } from './actionTypes'
import axios from 'axios'

export function inputChangeAction(value) {
  const action = {
    type: INPUT_CHANGE,
    payload: {
      value
    }
  }
  return action
}


export function addItemAction() {
  const action = {
    type: ADD_ITEM
  }
  return action
}

export function deleteItemAction(index) {
  const action = {
    type: DELETE_ITEM,
    payload: {
      index
    }
  }
  return action
}

export function initListAction(list) {
  const action = {
    type: INIT_LIST,
    payload: {
      list
    }
  }
  return action
}

export function getList() {
  return function (dispatch) {
    axios.get('http://mock-api.com/wnapNXg1.mock/list').then(res => {
      dispatch(initListAction(res.data))
    })
  }
}