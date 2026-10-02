import axios from "axios";

axios.defaults.baseURL = "http://hn.algolia.com/api/v1";

const fetchArticles = async query => {
  const resp = await axios.get(`/search?query=${query}`);
  return resp.data.hits;
};

export default {
  fetchArticles,
};
