import Logo from "./Logo"
import Icons from "./Icons"

const Header = ({settingsButton, settingsFunction}) => {
  return (
    <div className="w-full h-20 backdrop-blur-3xl bgwhite/50 flex justify-between">
      <Logo />
      <Icons settings = {settingsButton} settingsToggle = {settingsFunction}/>
    </div>
  );
};

export default Header