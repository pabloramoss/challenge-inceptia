import Image from "next/image"
import { FaUserCircle } from 'react-icons/fa'

interface Props {
  setIsLogin: any;
}

const Navbar: React.FC<Props> = ({ setIsLogin }) => {
  return (
    <div className="flex bg-slate-800 justify-between items-center mx-4">
      <Image height={50} width={186} src="/logo.jpg" alt="inceptia logo"  />
      <div className="flex mr-8 gap-3">
        <div className="flex gap-2 items-center">
          <FaUserCircle size={20}  />
          <p>Username</p>
        </div>
          <button onClick={()=> setIsLogin(false)} className="bg-slate-600 px-3 text-sm rounded-md shadow-lg text-slate-200">Logout</button>
      </div>
    </div>
  )
}

export default Navbar