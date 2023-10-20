import axios from "axios";
export default {
  findAllUser: () => axios.get(import.meta.env.VITE_API_URL + "/users"),
  createUser: (newUser) =>
    axios.post(import.meta.env.VITE_API_URL + "/users", newUser),
  editUser: (id, user) =>
    axios.put(import.meta.env.VITE_API_URL + `/users/${id}`, user),
  deleteUser: (id) => axios.delete(import.meta.env.VITE_API_URL + "/users/" + id),
};
