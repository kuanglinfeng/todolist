import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM, INIT_LIST } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}


function todoReducer(state = defaultState, action) { 
  switch (action.type) {
    case INPUT_CHANGE: {
      const newState = JSON.parse(JSON.stringify(state))
      const { value } = action.payload
      newState.inputValue = value
      return newState
    }
    case ADD_ITEM: {
      const newState = JSON.parse(JSON.stringify(state))
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    }
    case DELETE_ITEM: {
      const newState = JSON.parse(JSON.stringify(state))
      const { index } = action.payload
      newState.list.splice(index, 1)
      return newState      
    }
    case INIT_LIST: {
      const newState = JSON.parse(JSON.stringify(state))
      const { list } = action.payload
      newState.list = [...list]  
      return newState    
    }
    default:
      return state
  }
}


export default todoReducer

