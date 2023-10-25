import { axiosInstance } from "./core";

const TodoApi = {
  async getTodo() {
    const res = await axiosInstance.get("/");
    return res.data;
  },

  async addTodo({name, age, hobby}) {
    const res = await axiosInstance.post("/", { name, age, hobby });
    return res.data;
  },
};

export default TodoApi;
