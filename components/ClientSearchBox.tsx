
import { FaSearch } from 'react-icons/fa'

const ClientSearchBox: React.FC = () => {
  
  return (
    <div className="m-3 flex justify-center">
      <input placeholder="🔍 Buscar" className="px-2 w-[120px] placeholder:text-slate-200 rounded-md bg-slate-400 shadow-lg" />
    </div>
  )
}

export default ClientSearchBox
