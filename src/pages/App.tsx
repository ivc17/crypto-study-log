import { Route, Routes } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      {/* <Route path="*" element={<Navigate to={'/'} replace />} /> */}
    </Routes>
  )
}

export default App
