import { 
  HashRouter as Router,  
  Route, 
  Routes
} from 'react-router-dom'
import Login from "./pages/Login"
import Nav from './components/nav'

export default function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Login/>} />
      </Routes>
    </Router>
  )
}