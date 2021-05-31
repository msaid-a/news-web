import {GET_HEADLINE} from '../action/headline.action'
import {headlineDefaultState, headlineReduxState} from '../states/headline.state'
import {AnyAction} from 'redux'

const headlineReducer = (state : headlineReduxState = headlineDefaultState, action : AnyAction) => {
    switch (action.type) {
        case GET_HEADLINE:
          return {
            ...state,
            headline: action.payload
          };
        default:
          return state;
      }
}

export default headlineReducer