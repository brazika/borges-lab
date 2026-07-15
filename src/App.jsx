import { Routes, Route, Navigate } from 'react-router-dom'
import Portfolio from './pages/Portfolio.jsx'
import CaseStudy from './pages/CaseStudy.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/portfolio" replace />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/:slug" element={<CaseStudy />} />
      <Route path="*" element={<Navigate to="/portfolio" replace />} />
    </Routes>
  )
}
