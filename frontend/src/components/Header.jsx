import Logo from "./Logo"
import Icons from "./Icons"

const Header = ({settingsButton, settingsFunction, sidebar, toggle}) => {
  
  return (
    <div className="w-full h-17 backdrop-blur-3xl bgwhite/50 flex justify-between items-center mb-5 px-3 shadow-[6px_0_9px_0px_black]">
      <Logo />
      <Icons sideBar = {sidebar} sidebarToggle = {toggle}/>
    </div>
  );
};

export default Header