import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com", // 실제 API 엔드포인트로 교체
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchJobs = () => api.get("/jobs");
export const fetchJobDetails = (id) => api.get(`/jobs/${id}`);
export const applyForJob = (data) => api.post("/applications", data);

export default api;