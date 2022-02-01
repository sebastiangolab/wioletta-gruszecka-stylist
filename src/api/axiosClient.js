import axios from "axios";

const BASE_URL = "https://graphql.datocms.com/";

const DATOCMS_API = "ae5d3f45294cae2cceb3d358a1cf0e";

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${DATOCMS_API}`,
  },
});
