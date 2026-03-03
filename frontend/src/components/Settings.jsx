import SettingsContainer from "./SettingsContainer"

const Settings = ({settingsButton, settingsFunction}) => {
const handleSettings = () => {
  settingsFunction(settingsButton && false)
}

  return (
    <div onClick={handleSettings} className="w-full h-screen fixed top-0 flex flex-col items-center justify-center backdrop-blur-sm">
      <SettingsContainer />
    </div>
  )
}

export default Settings