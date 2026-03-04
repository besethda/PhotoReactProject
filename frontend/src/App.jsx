import Container from './components/Container'
import PhotoAlbumView from './components/PhotoAlbumView'
import Header from "./components/Header"
import Settings from "./components/Settings"
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const [settings, showSettings] = useState(false)

  const handleSettings = () => {
    showSettings(settings && false )
  }

  return (
    <>
      <BrowserRouter>
        <Header settingsButton = {settings} settingsFunction = {showSettings}/>
        <Routes>
          <Route path="/categories" element={<Container category = {"gallery"}/>}/>
          <Route path="/album" element={<PhotoAlbumView />} />
        </Routes>
        {settings && <Settings settingsButton = {settings} settingsFunction = {showSettings}/>}
      </BrowserRouter>
    </>
  )
}

export default App
