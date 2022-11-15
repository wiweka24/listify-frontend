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

export default function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Activity/>} />
        {/* <Route path='/register' element={<Register/>} /> */}
        {/* <Route path='/activity' element={<Activity/>} /> */}
        {/* <Route path='/profile' element={<Profile/>} /> */}
      </Routes>
    </Router>
  )
}