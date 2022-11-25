import axios from "axios"
import { useNavigate } from "react-router-dom"

export const axiosInstance = axios.create({
  withCredentials: true
})

export const URI = "https://backend-listify.vercel.app"

export const notLogin = () => {
  const navigate = useNavigate
  navigate('/')
}

// https://backend-kelompok4.vercel.app