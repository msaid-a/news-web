import {articles} from '../model/index'
import apiBase from './base'

interface newsResponse {
    totalArticles: number,
    articles : articles[]
}

interface topHeadline {
    totalArticles: number,
    articles : articles[]
}

export interface NewsApi {
    getNewsData: (search: string) =>  Promise<newsResponse>,
    getTopHeadlines: (category : string) => Promise<topHeadline>,
}

const newsApi : NewsApi = {
    getNewsData :(search) => apiBase.get(`/top-headlines?token=c470b569ea95a80ab731da8369048d3c&lang=en&q=${search}`),
    getTopHeadlines: (category: string) => apiBase.get(`/top-headlines?token=c470b569ea95a80ab731da8369048d3c&lang=en&topic=${category}`),
}



export default newsApi