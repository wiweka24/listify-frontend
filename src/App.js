import { 
  HashRouter as Router,  
  Route, 
  Routes
} from 'react-router-dom'
import Login from "./pages/Login"
import Nav from './components/nav'
import Form from './pages/Form'

export default function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/form' element={<Form/>} />
      </Routes>
    </Router>
  )
}