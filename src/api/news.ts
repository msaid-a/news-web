import {articles} from '../model/index'
import apiBase from './base'

interface newsResponse {
    status: string,
    totalResults: number,
    articles : articles[]
}

interface topHeadline {
    status: string,
    totalResults: number,
    articles : articles[]
}

export interface NewsApi {
    getNewsData: () =>  Promise<newsResponse>,
    getTopHeadlines: (category : string) => Promise<topHeadline>,

}

const keys = 'dacd081181ce4a34ac2b8a461b7ea8d0'
const url = '/everything'
const value = 'bitcoin'

const newsApi : NewsApi = {
    getNewsData :() => apiBase.get(`${url}?q=${value}&apiKey=${keys}`),
    getTopHeadlines: (category: string) => apiBase.get(`/top-headlines?category=${category}&country=id&apiKey=${keys}`),
}



export default newsApi