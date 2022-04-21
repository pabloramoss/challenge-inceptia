import Image from "next/image"
import { FaUserCircle } from 'react-icons/fa';

const Navbar: React.FC = () => {
  
  return (
    <div className="flex bg-slate-800 h-24 justify-between items-center">
      <Image height={79} width={296} src="/logo.jpg" alt="inceptia logo"  />
      <div className="flex flex-col mr-8 gap-2">
        <div className="flex gap-2 items-center">
          <FaUserCircle size={30}  />
          <p>Username</p>
        </div>
        <button className="bg-slate-600 rounded-md shadow-lg text-slate-200">Logout</button>
      </div>
    </div>
  )
}

export default Navbar