import axios from "axios";

const KEY = "481ac523ae2440a098018e0e2fcdf19e";
const BASE_URL = "https://api.rawg.io/api";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const getAll = async (controller) => {
  try {
    const resp = await apiClient.get(`/games?key=${KEY}`, {
      signal: controller?.current?.signal,
    });
    return resp.data.results;
  } catch (error) {
    console.log("🚀 ~ getAll ~ error:", error);
  }
};

export const getByQuery = async (query = "", controller) => {
  try {
    const resp = await apiClient.get(`/games?key=${KEY}&search=${query}`, {
      signal: controller?.current?.signal,
    });

    return resp.data.results;
  } catch (error) {
    console.log("🚀 ~ getAll ~ error:", error);
  }
};

export const getGameById = async (id, controller) => {
  try {
    const resp = await apiClient.get(`/games/${id}?key=${KEY}`, {
      signal: controller?.current?.signal,
    });

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
