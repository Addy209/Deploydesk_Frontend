import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Login from './Components/Login/login';
import Test from './Components/Test';

function App() {
  const [count, setCount] = useState(0)

  return (
    <><Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
