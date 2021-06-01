import {store} from '../redux'
import {setNews} from '../redux/action/news.action'
import {setHeadline} from '../redux/action/headline.action'
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

    public async getHeadline(category: string) {
      try {
        const {articles} = await api.newsApi.getTopHeadlines(category)
        store.dispatch(setHeadline(articles))
      } catch (error) {
        console.log(error)
      }
    }

    public async getHeadlineNoRedux(category: string) {
      try {
        const res = await api.newsNoRedux.getTopHeadlinesNoRedux(category)
        return res
      } catch (error) {
        console.log(error)
      }
    }
  
  }
  
  export const newsServices = new NewsServices();