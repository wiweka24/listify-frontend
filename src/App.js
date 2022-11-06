import { 
  HashRouter as Router,  
  Route, 
  Routes
} from 'react-router-dom'
import Login from "./pages/Login"
//import Nav from "./navbar"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
      </Routes>
    </Router>
  )
}