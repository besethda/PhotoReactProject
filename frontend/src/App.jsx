import Container from './components/Container'
import Header from "./components/Header"
import Settings from "./components/Settings"
import { useState } from 'react'

function App() {
  const [settings, showSettings] = useState(false)

  const handleSettings = () => {
    showSettings(settings && false )
  }

  return (
    <>
      <Header settingsButton = {settings} settingsFunction = {showSettings}/>
      <Container category = {"gallery"}/>
      {settings && <Settings settingsButton = {settings} settingsFunction = {showSettings}/>}
    </>
  )
}

export default App
