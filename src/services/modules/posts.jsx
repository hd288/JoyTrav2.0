import axios from "axios";

export default {
    findAllPosts: () => axios.get(import.meta.env.VITE_API_URL + "/posts"),
}