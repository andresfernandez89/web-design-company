import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* Agrega más rutas si es necesario */}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
