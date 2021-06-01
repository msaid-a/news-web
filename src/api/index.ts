import newsApi, { NewsApi } from "./news";
import newsNoRedux, {iNoRedux} from './noRedux'

interface IApi {
    newsApi: NewsApi
    newsNoRedux: iNoRedux
}

const api: IApi = {
    newsApi,
    newsNoRedux,
}

export default api;
