import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import RequireAuth from './components/RequireAuth'

function App () {
  return (
    <BrowserRouter>
      {/* <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
      </ul> */}
      <Routes>
        <Route index element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
