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

import Register from './pages/Register'
import Profile from './pages/Profile'
=======
import Register from './pages/Register'
import Profile from './pages/Profile'
import Form from './pages/Form'
import NotFound from './pages/Notfound'
import Homepage from './pages/Homepage'
>>>>>>> 92bdca2e5133ca46e5ae3d89726777365c27dc1b

export default function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Login/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/activities' element={<Activities/>} />
        <Route path='/profile' element={<Profile/>} />
=======
        <Route path='/' element={<Homepage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/activities' element={<Activities/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/*' element={<NotFound/>} />
        <Route path='/form' element={<Form/>} />
>>>>>>> 92bdca2e5133ca46e5ae3d89726777365c27dc1b
      </Routes>
    </Router>
  )
}