import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: { key: 'c16116b9ceaa4e4c907c6d94c84e87f7' },
});

class APIClient<T> {
  endpint: string;

  constructor(endpoint: string) {
    this.endpint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpint, config).then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance.get<T>(this.endpint + '/' + id).then((res) => res.data);
  };
}

export default APIClient;
