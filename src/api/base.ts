import axios, { AxiosRequestConfig, AxiosStatic, AxiosResponse } from 'axios';

class ApiBase {
  private axios: AxiosStatic;

  constructor() {
    this.axios = axios
    this.axios.defaults.baseURL = 'https://gnews.io/api/v4';
    this.axios.interceptors.response.use(
      (response) => response.data,
      (error) => Promise.reject(error)
    )
  }
    
  public async get(path: string, config?: AxiosRequestConfig) {
    return await this.axios.get(path, config) as any
  }
  
}

const apiBase = new ApiBase();



export default apiBase;