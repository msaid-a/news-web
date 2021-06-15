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
    getNewsData :(search) => apiBase.get(`/top-headlines?token=155969ab1fa25f257c50544bf5c177f1&langguage=en&q=${search}`),
    getTopHeadlines: (category: string) => apiBase.get(`/top-headlines?token=155969ab1fa25f257c50544bf5c177f1&langguage=en&topic=${category}`),
}



export default newsApi