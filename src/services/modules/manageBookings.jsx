import axios from "axios";
export default {
  createBooking: (newBooking) =>
    axios.post(import.meta.env.VITE_API_URL + "/bookingManage", newBooking),
  findAllBooking: () =>
    axios.get(import.meta.env.VITE_API_URL + "/bookingManage"),
  deleteBooking: (id) =>
    axios.delete(import.meta.env.VITE_API_URL + "/bookingManage/" + id),
  editBooking: (id, booking) =>
    axios.put(import.meta.env.VITE_API_URL + `/bookingManage/${id}`, booking),
};
