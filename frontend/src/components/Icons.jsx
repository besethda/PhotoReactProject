const Icons = ({sideBar, sidebarToggle}) => {

  const handleSidebar = () => {
    sidebarToggle(!sideBar)
  }

  return (
    <div className="h-fit w-fit flex">
      <svg onClick={handleSidebar} className="fill-black h-13 w-13 cursor-pointer m-1 hover:fill-gray-500 active:scale-98 duration-90" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m524.78 286.11H275.21c-6.957.0-12.594-5.6406-12.594-12.598.0-6.9531 5.6367-12.594 12.594-12.594h249.57c6.957.0 12.598 5.6406 12.598 12.594.0 6.957-5.6406 12.598-12.598 12.598zm0 101.29H369.43h.003906c-6.957.0-12.598 5.6406-12.598 12.598.0 6.9531 5.6406 12.594 12.598 12.594h155.35H524.78c6.957.0 12.598-5.6406 12.598-12.594.0-6.957-5.6406-12.598-12.598-12.598zm0 126.48H312.21c-6.957.0-12.598 5.6406-12.598 12.598s5.6406 12.594 12.598 12.594h212.57-.003906c6.957.0 12.598-5.6367 12.598-12.594s-5.6406-12.598-12.598-12.598z"/></svg>
    </div>
  )
}

export default Icons