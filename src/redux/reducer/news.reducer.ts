import {GET_NEWS} from '../action/news.action'
import {newsDefaultState, newsReduxState} from '../states/news.state'
import {AnyAction} from 'redux'

const newsReducer = (state : newsReduxState = newsDefaultState, action : AnyAction) => {
    switch (action.type) {
        case GET_NEWS:
          return {
            ...state,
            news: action.payload
          };
        default:
          return state;
      }
}

export default newsReducer