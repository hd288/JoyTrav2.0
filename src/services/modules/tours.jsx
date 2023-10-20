import axios from "axios";
export default {
  findAllDom: () => axios.get(import.meta.env.VITE_API_URL + "/domesticTours"),
  findAllInt: () =>
    axios.get(import.meta.env.VITE_API_URL + "/internationalTours"),
  editInt: (id, tour) =>
    axios.put(import.meta.env.VITE_API_URL + `/internationalTours/${id}`, tour),
  editDom: (id, tour) =>
    axios.put(import.meta.env.VITE_API_URL + `/domesticTours/${id}`, tour),
  deleteDom: (id) =>
    axios.delete(import.meta.env.VITE_API_URL + "/domesticTours/" + id),
  deleteInt: (id) =>
    axios.delete(import.meta.env.VITE_API_URL + "/internationalTours/" + id),
};
