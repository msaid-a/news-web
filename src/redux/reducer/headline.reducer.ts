import { GET_HEADLINE_HEALTH, GET_HEADLINE_SPORT, GET_HEADLINE_WORD } from '../action/headline.action'
import { GET_BREAKING_NEWS } from '../action/news.action'
import { headlineDefaultState, headlineReduxState } from '../states/headline.state'
import { AnyAction } from 'redux'

const headlineReducer = (state: headlineReduxState = headlineDefaultState, action: AnyAction) => {
  switch (action.type) {
    case GET_BREAKING_NEWS:
      return {
        ...state,
        breakingNews: action.payload
      };
    case GET_HEADLINE_WORD:
      return {
        ...state,
        world: action.payload
      };
    case GET_HEADLINE_SPORT:
      return {
        ...state,
        sport: action.payload
      };
    case GET_HEADLINE_HEALTH:
      return {
        ...state,
        healt: action.payload
      };

    default:
      return state;
  }
}

export default headlineReducer