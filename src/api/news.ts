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
    getNewsData :(search) => apiBase.get(`/search?token=2f715a3d38225d81e7260bf90186aee8&lang=en&q=${search}`),
    getTopHeadlines: (category: string) => apiBase.get(`/top-headlines?token=2f715a3d38225d81e7260bf90186aee8&lang=en&topic=${category}`),
}



export default newsApi