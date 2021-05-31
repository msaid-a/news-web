import {GET_HEADLINE} from '../action/headline.action'
import {headlineDefaultState, headlineReduxState} from '../states/headline.state'
import {AnyAction} from 'redux'

const newsReducer = (state : headlineReduxState = headlineDefaultState, action : AnyAction) => {
    switch (action.type) {
        case GET_HEADLINE:
          return {
            ...state,
            news: action.payload
          };
        default:
          return state;
      }
}

export default newsReducer