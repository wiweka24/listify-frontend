import { 
  HashRouter as Router,  
  Route, 
  Routes
} from 'react-router-dom'
import Login from "./pages/Login"
import Activity from './pages/Activity_Test'
import Nav from './components/nav'
import Register from './pages/Register'

export default function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/Reg' element={<Register/>} />
        <Route path='/1' element={<Activity/>} />
      </Routes>
    </Router>
  )
}