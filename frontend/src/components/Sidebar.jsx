import { Link } from "react-router-dom"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react";

const Sidebar = () => {
  const sidebarContainer = useRef()

  useGSAP(()=> {
    gsap.from(sidebarContainer.current, {
      x:400,
      ease:"sine.out",
      duration:.5
    })
  }, {scope: sidebarContainer})

  return (
    <div ref={sidebarContainer} className="z-8 fixed top-17 right-0 w-fit bg-white h-full flex flex-col p-3 shadow-[-4px_3px_4px_0_gray]">
      <Link to={"/"} className="text-2xl text-center p-1">Home</Link>
      <Link to={"/categories"} className="text-2xl text-center p-1">Categories</Link>
      <Link to={"/contact"} className="text-2xl text-center p-1">Contact</Link>
    </div>
  );
};

export default Sidebar;