import newsApi, { NewsApi } from "./news";

interface IApi {
    newsApi: NewsApi;
}

const api: IApi = {
    newsApi
}

export default api;
