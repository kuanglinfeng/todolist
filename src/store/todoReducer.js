import { ADD_ITEM, INPUT_CHANGE, DELETE_ITEM, INIT_LIST } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

function todoReducer(state = defaultState, action) {
  
  switch (action.type) {
    case INIT_LIST: {
      const newState = Object.assign(state)
      newState.list = newState.list.concat(action.payload.list)
      return newState
    }
    case INPUT_CHANGE: {
      const newState = Object.assign(state)
      newState.inputValue = action.payload.value
      return newState
    }
    case ADD_ITEM: {
      const newState = Object.assign(state)
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    }
    case DELETE_ITEM: {
      const newState = Object.assign(state)
      newState.list.splice(action.payload.index, 1)
      return newState
    }
  }

  return state
}

export default todoReducer