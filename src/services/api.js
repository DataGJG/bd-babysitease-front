import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const fetchHomeData = async () => {
  try {
    const response = await api.get("/home");
    return response.data;
  } catch (error) {
    console.error("Error fetching home data:", error);
    throw error;
  }
};
