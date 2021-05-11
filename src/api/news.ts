import {articles} from '../model/index'
import apiBase from './base'

interface newsResponse {
    status: string,
    totalResults: number,
    articles : articles[]
}

export interface NewsApi {
    getNewsData: () =>  Promise<newsResponse>
}

const keys = 'dacd081181ce4a34ac2b8a461b7ea8d0'
const url = '/everything?q=bitcoin&apiKey=dacd081181ce4a34ac2b8a461b7ea8d0'
const value = 'bitcoin'

const newsApi : NewsApi = {
    getNewsData :() => apiBase.get(url)
}

export default newsApi