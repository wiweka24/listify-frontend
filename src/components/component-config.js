import axios from "axios"
import { useNavigate } from "react-router-dom"

export const axiosInstance = axios.create({
  withCredentials: true
})

export const URI = "http://localhost:5000"

export const notLogin = () => {
  const navigate = useNavigate
  navigate('/')
}

export const toastifyConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
}

// https://backend-kelompok4.vercel.app