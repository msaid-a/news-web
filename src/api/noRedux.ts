import {articles} from '../model/index'
import apiBase from './base'

const keys = 'dacd081181ce4a34ac2b8a461b7ea8d0'

export interface iNoRedux {
    getTopHeadlinesNoRedux: (category : string) => any,
}

const newsNoRedux : iNoRedux = {
    getTopHeadlinesNoRedux: (category: string) => apiBase.get(`/top-headlines?category=${category}&langguage=en&apiKey=${keys}`),
}

export default newsNoRedux