import axios from 'axios'

export default function Login() {
  const axiosInstance = axios.create({
    withCredentials: true
  })
  const URL = "http://localhost:5000/user/login"

  const Login = async () => {
    try {
        const res = await axiosInstance.post(
          URL, 
          {
            "email": "wiweka24@mail.com",
            "password": "Wiweka12345#"
          })
        console.log(res.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
  };

  Login()

  return (
    <div>Login</div>
  )
}
