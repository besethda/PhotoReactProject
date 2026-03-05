import Container from './components/Container'
import PhotoAlbumView from './components/PhotoAlbumView'
import Header from "./components/Header"
import Settings from "./components/Settings"
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FrontPage from './components/FrontPage'
import Contact from './components/Contact'
import Sidebar from './components/Sidebar'

function App() {
  const [settings, showSettings] = useState(false)
  const [sideBar, toggleSidebar] = useState(false)

  const handleSettings = () => {
    showSettings(settings && false )
  }

  return (
    <>
      <BrowserRouter>
        <Header sidebar = {sideBar} toggle = {toggleSidebar}/>
        { sideBar && <Sidebar />}
        <Routes>
          <Route path="/" element={FrontPage}/>
          <Route path="/categories" element={<Container category = {"gallery"}/>}/>
          <Route path="/album" element={<PhotoAlbumView />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {settings && <Settings settingsButton = {settings} settingsFunction = {showSettings}/>}
      </BrowserRouter>
    </>
  )
}

export default App
