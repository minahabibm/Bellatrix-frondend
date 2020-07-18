import {
  Skills,
  Users,
  Tasks,
  Filters
} from'./dummyData'

import {
  TEST,
  //SHOW_ALL_SKILLS,
  //SHOW_ALL,
  //ADD_SKILL,
  //REMOVE_SKILL,
  //ADD_SKILL_LEVEL,
  //REMOVE_SKILL_LEVEL
} from './actions'

const initialState = {
  skills: Skills,
  user: Users,
  tasks: Tasks,
  filters: Filters,
  }

function state(state = initialState, action) {
  switch (action.type) {
    case TEST:
      return [
        ...state,
        ]
      /**case ADD_TODO:
        return Object.assign({}, state, {
          todos: [
            ...state.todos,
            {
              text: action.text,
              completed: false
            }
          ]
        })**/
      default:
        //console.log('reducer', state, action);
        return state
    }
  }

export default state;