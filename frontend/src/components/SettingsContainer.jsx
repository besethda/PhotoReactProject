const SettingsContainer = () => {
  return (
    <div onClick={(e)=> e.stopPropagation()} className="w-[80%] h-[70%] bg-white rounded-2xl border-black">
      <h2 className="text-4xl text-black p-2">Settings</h2>
      <div className="flex flex-col px-3">
        <div className="text-xl text-black p-1 w-full">Theme:</div>
        <div className="text-md text-black px-3">Light</div>
      </div>
    </div>
  )
}

export default SettingsContainer