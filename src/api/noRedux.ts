import {articles} from '../model/index'
import apiBase from './base'


export interface iNoRedux {
    getTopHeadlinesNoRedux: (category : string) => any,
}

const newsNoRedux : iNoRedux = {
    getTopHeadlinesNoRedux: (category: string) => apiBase.get(`/top-headlines?token=155969ab1fa25f257c50544bf5c177f1&langguage=en&topic=${category}`),
}

export default newsNoRedux