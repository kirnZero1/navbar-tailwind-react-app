import React, {useState} from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { GiLevelThree } from "react-icons/gi";

function Navbar() {
  const [menu, setMenu] = useState(false)
  return (
    <>
    <div className="lg:w-[1140px] h-[10pvh] md:bg-slate-700 text-white sm: bg-slate-700 text-white">
          <div className="md:flex items-center justify-between">
            <a className="flex items-center justify-between ml-[10px] lg:text-2xl md: text-1xl p-[10px] sm: text-1xl" ><span className="text-orange-400"><GiLevelThree />Logo</span></a>
            
              <ul className='lg:flex lg:items-center lg:justify-center list-none md:hidden sm: hidden'>
                  <li className="text-2xl mr-[30px] hover:text-orange-400 active:text-orange-700" ><a>Home</a></li>
                  <li className="text-2xl mr-[30px] hover:text-orange-400 active:text-orange-700"><a>About</a></li>
                  <li className="text-2xl mr-[30px] hover:text-orange-400 active:text-orange-700"><a>Profile</a></li>
                  <li className="text-2xl mr-[30px] hover:text-orange-400 active:text-orange-700"><a>Contacts</a></li>
              </ul>
              <div onClick={()=>setMenu(!menu)} className="flex items-center justify-center lg:hidden  text-orange text-4xl absolute right-8 top-3">{menu ? <IoClose /> : <CiMenuBurger />}</div>
          </div>
          <div>
          <ul className={ menu ? 'bg-white text-orange-600 lg:hidden md:block md:items-center md:justify-center list-none ' : 'hidden'}>
                  <li className="text-2xl pt-4 mb-4 hover:text-orange-900 " ><a>Home</a></li>
                  <li className="text-2xl pt-4 mb-4 hover:text-orange-900 "><a>About</a></li>
                  <li className="text-2xl pt-4 mb-4 hover:text-orange-900 "><a>Profile</a></li>
                  <li className="text-2xl pt-4 mb-4 hover:text-orange-900 "><a>Contacts</a></li>
              </ul>
          </div>
    </div>
    </>
  )
}

export default Navbar