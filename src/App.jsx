import { useState } from 'react'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

import Navbar from './components/Navbar'
import Inicio from './pages/Inicio';
import About from './pages/About';
import Expirience from './pages/Expirience';
function App() {
  const [count, setCount] = useState(0)

  return (
    < div className='bg-[#F2F2F2] '>
      <Navbar />
      <Inicio />
      <About />
      <Expirience />
    </div>
  )
}

export default App
