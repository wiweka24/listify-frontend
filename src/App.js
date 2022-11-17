import { 
  HashRouter as Router,  
  Route, 
  Routes
} from 'react-router-dom'
import Login from "./pages/Login"
import Activities from './pages/Activities'
import Nav from './components/nav'
<<<<<<< HEAD
import Form from './pages/Form'
=======
import Register from './pages/Register'
import Profile from './pages/Profile'
>>>>>>> d1b9be4892ecf2eeaee28452de33d9d15da6e2cc

export default function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Login/>} />
<<<<<<< HEAD
        <Route path='/form' element={<Form/>} />
=======
        <Route path='/register' element={<Register/>} />
        <Route path='/activities' element={<Activities/>} />
        <Route path='/profile' element={<Profile/>} />
>>>>>>> d1b9be4892ecf2eeaee28452de33d9d15da6e2cc
      </Routes>
    </Router>
  )
}