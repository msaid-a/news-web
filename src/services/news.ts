import {store} from '../redux'
import {setNews} from '../redux/action/news.action'
import {articles} from '../model'
import api from '../api'

class NewsServices {

    public async getNews() {
      try {
        const {articles} = await api.newsApi.getNewsData()
        store.dispatch(setNews(articles))
      } catch (error) {
        console.error(error)
      }
    }
  
  }
  
  export const newsServices = new NewsServices();