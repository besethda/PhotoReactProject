import Container from './components/Container'
import Header from "./components/Header"
import Settings from "./components/Settings"
import { useState } from 'react'

function App() {
  const [settings, showSettings] = useState(false)

  return (
    <>
      <Header settingsButton = {settings} settingsFunction = {showSettings}/>
      <Container />
      {settings && <Settings />}
    </>
  )
}

export default App
