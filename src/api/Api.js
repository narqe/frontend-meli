import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:4200';

const axiosInstance = axios.create({
  baseURL,
});

class API {
  static async getProducts(searchTerm) {
    const { data } = await axiosInstance.get(
      `/productos/${searchTerm}`
    );
    return data;
  }

  static async getDetails(itemId) {
    const { data } = await axiosInstance.get(
      `/detalles/${itemId}`
    );
    return data;
  }
}

export default API;
