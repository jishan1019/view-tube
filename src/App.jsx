import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import VideoPlayer from './pages/VideoPlayer'
import Channel from './pages/Channel'
import Upload from './pages/Upload'
import Search from './pages/Search'
import Subscriptions from './pages/Subscriptions'
import Auth from './pages/Auth'
import AdminPanel from './pages/AdminPanel'

function App() {
  const [user, setUser] = useState(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {user ? (
          <>
            <Header user={user} setUser={setUser} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
            <div className="flex pt-14">
              <Sidebar isOpen={isSidebarOpen} />
              <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/watch/:id" element={<VideoPlayer user={user} />} />
                  <Route path="/channel/:id" element={<Channel user={user} />} />
                  <Route path="/upload" element={<Upload user={user} />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/subscriptions" element={<Subscriptions user={user} />} />
                  <Route path="/admin" element={<AdminPanel user={user} />} />
                </Routes>
              </main>
            </div>
          </>
        ) : (
          <Auth setUser={setUser} />
        )}
      </div>
    </Router>
  )
}

export default App
