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
import NotFound from './pages/Notfound'

export default function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/activities' element={<Activities/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/*' element={<NotFound/>} />
      </Routes>
    </Router>
  )
}