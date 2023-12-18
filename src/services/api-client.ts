import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'c16116b9ceaa4e4c907c6d94c84e87f7',
  },
});

class APIClient<T> {
  endpint: string;
  constructor(endpint: string) {
    this.endpint = endpint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpint, config).then((response) => response.data);
  };
}

export default APIClient;
