import {articles} from '../../model'
import {createAction} from '../../utilities'

export const GET_NEWS: string = 'NEWS.GET_NEWS';


export const setNews = (news: articles[]) => {
    return createAction<articles[]>(GET_NEWS, news)
}