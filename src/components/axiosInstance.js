import axios from "axios"

export const axiosInstance = axios.create({
  withCredentials: true
})

export const URI = "http://localhost:5000"

// https://backend-kelompok4.vercel.app