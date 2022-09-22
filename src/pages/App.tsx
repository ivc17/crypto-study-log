import { Route, Routes } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <Routes>
      <Route path={process.env.PUBLIC_URL + '*'} element={<Home />} />
      {/* <Route path="*" element={<Navigate to={'/'} replace />} /> */}
    </Routes>
  )
}

export default App
