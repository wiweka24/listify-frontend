import { 
  HashRouter as Router,  
  Route, 
  Routes
} from 'react-router-dom'
import Login from "./pages/Login"
import Activities from './pages/Activity'
import Nav from './components/nav'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Modal from './components/modal'

export default function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Activities/>} />
        {/* <Route path='/register' element={<Register/>} />
        <Route path='/activity' element={<Activities/>} />
        <Route path='/profile' element={<Profile/>} /> */}
      </Routes>
    </Router>
  )
}