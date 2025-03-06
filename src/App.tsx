import React from 'react'
import Home from './pages/Home'
import ProtectedRoute from './utils/AuthProvider';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import PageNotFound from './pages/PageNotFound';
import Header from './components/Header';
const App: React.FC = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard/*" element={<ProtectedRoute element={<Dashboard/>}/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App