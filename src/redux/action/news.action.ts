import {articles} from '../../model'
import {createAction} from '../../utilities'

export const GET_NEWS: string = 'NEWS.GET_NEWS';
export const GET_NEWS_SOURCE: string = 'NEWS.GET_NEWS_SOURCE'
export const GET_BREAKING_NEWS: string = 'NEWS.GET_BREAKING_NEWS'

export const setNews = (news: articles[]) => {
    return createAction<articles[]>(GET_NEWS, news)
}

export const setBreakingNews = (news: articles[]) => {
    return createAction<articles[]>(GET_BREAKING_NEWS, news)
}
