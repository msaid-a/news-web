import {GET_HEADLINE} from '../action/headline.action'
import {GET_BREAKING_NEWS} from '../action/news.action'
import {headlineDefaultState, headlineReduxState} from '../states/headline.state'
import {AnyAction} from 'redux'

const headlineReducer = (state : headlineReduxState = headlineDefaultState, action : AnyAction) => {
    switch (action.type) {
        case GET_HEADLINE:
          return {
            ...state,
            headline: action.payload
          };
        case GET_BREAKING_NEWS:
          return {
            ...state,
            breakingNews: action.payload
          };
        default:
          return state;
      }
}

export default headlineReducer