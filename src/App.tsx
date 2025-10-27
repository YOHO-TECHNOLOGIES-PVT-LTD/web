import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Talent from './pages/Talent'
import About from './pages/About'
import Resources from './pages/Resources'
import SignIn from './pages/SignIn'
import GetStarted from './pages/GetStarted'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
