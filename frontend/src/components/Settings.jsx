import SettingsContainer from "./SettingsContainer"

const Settings = ({settingsButton, settingsFunction}) => {
const handleSettings = () => {
  settingsFunction(settingsButton && false)
}

  return (
    <div onClick={handleSettings} className="z-7 w-full h-screen fixed top-0 flex flex-col p-10 items-center justify-center bg-gray-950/12 backdrop-blur-sm">
      <SettingsContainer />
    </div>
  )
}

export default Settings