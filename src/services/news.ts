import {store} from '../redux'
import {setBreakingNews, setNews} from '../redux/action/news.action'
import { setHeadlineHealth, setHeadlineSport, setHeadlineWordl} from '../redux/action/headline.action'
import api from '../api'

class NewsServices {

    public async getNews(search: string) {
      try {
        const {articles} = await api.newsApi.getNewsData(search)
        store.dispatch(setNews(articles))
      } catch (error) {
        console.error(error)
      }
    }

    public async getHeadline(category: string) {
      try {
        const {articles} = await api.newsApi.getTopHeadlines(category)
        console.log(category, 'zxczxc')
        store.dispatch(setHeadlineWordl(articles))
        
      } catch (error) {
        console.log(error)
      }
    }

    public async getHeadlineSport() {
      try {
        const {articles} = await api.newsApi.getNewsData("sport")
        store.dispatch(setHeadlineSport(articles))
      } catch (error) {
        console.log(error)
      }
    }

    public async getHeadlineHealth() {
      try {
        const {articles} = await api.newsApi.getTopHeadlines("health")
        store.dispatch(setHeadlineHealth(articles))
      } catch (error) {
        console.log(error)
      }
    }


    public async getBreakingNews() {
      try {
        const {articles} = await api.newsApi.getTopHeadlines('breaking-news')
        store.dispatch(setBreakingNews(articles))
      } catch (error) {
        console.log(error)
      }
    }
  
  }
  
  export const newsServices = new NewsServices();