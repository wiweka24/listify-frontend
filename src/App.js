import { 
  HashRouter as Router,  
  Route, 
  Routes
} from 'react-router-dom'
import Login from "./pages/Login"
import Activities from './pages/Activities'
import Nav from './components/nav'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Form from './pages/Form'

export default function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/activities' element={<Activities/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/form' element={<Form/>} />
      </Routes>
    </Router>
  )
}