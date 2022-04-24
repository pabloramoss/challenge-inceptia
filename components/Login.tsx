import { FaLock, FaUser } from 'react-icons/fa'
import Image from "next/image"

type Input = {
  icon: any;
  placeholder: string;
}

type Props = {
  getData: any;
}

const Input: React.FC<Input> = ({ icon, placeholder }) => {
  return (
    <div className="flex">
      <div className="text-slate-400 p-2 bg-slate-800">
        {icon}
      </div>
      <input 
        className="bg-slate-300 w-full placeholder:pl-2" 
        placeholder={placeholder} 
        disabled
      />
  </div>
  )
}

const Login: React.FC<Props> = ({ getData }) => {
  
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="flex flex-col items-center p-10 w-80 bg-white rounded-md">
        <Image height={50} width={186} src="/logo.jpg" alt="inceptia logo"  />
        <p className="text-xl text-slate-700 mt-6 text-center font-bold mb-10">FAKE LOGIN</p>
        <div className="flex flex-col gap-2 gap-">
          <Input icon={<FaUser size={20} />} placeholder="username@inceptia.ai" />
          <Input icon={<FaLock size={20} />} placeholder="************" />
          <button onClick={getData} className="bg-slate-400 py-1 px-3 font-semibold hover:bg-slate-500">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
