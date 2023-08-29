import axios, { AxiosInstance, AxiosResponse } from 'axios';

const baseURL = 'http://localhost:1337/api';

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
});

export async function get<T>(url: string, params?: any): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
}

