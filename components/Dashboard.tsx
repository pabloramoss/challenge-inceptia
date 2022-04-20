import { useState } from "react";
import Chat from "./Chat";

interface Props {
  inboundCase: any;
}

const Dashboard: React.FC<Props> = ({ inboundCase }) => { 
  const [selectedCase, setSelectedCase] = useState<any[]>([])
  const [selectedChat, setSelectedChat] = useState<any>()

  return (
    <div className="max-w-[1000px]">
      <div className="grid grid-cols-9 bg-slate-300 text-xs text-center font-semibold py-2">
        <p>Gestionado</p>
        <p>ID Caso</p>
        <p>Telefono</p>
        <p>DNI</p>
        <p>Grupo</p>
        <p>Orden</p>
        <p>Llamada</p>
        <p>Estado</p>
      </div>
      <div className="grid max-h-80 overflow-y-auto text-center">
        {
          inboundCase.results.map((item: any) => (
            <div onClick={()=> setSelectedCase(item.case_log.responses)} 
              key={item.id} 
              className="hover:cursor-pointer hover:bg-slate-300 grid h-6 grid-cols-9 bg-slate-200 text-xs border border-sky-300"
            >
              <p>{item.last_updated}</p>
              <p>{item.case_uuid}</p>
              <p>{item.phone}</p>
              <p>{item.extra_metadata.dni}</p>
              <p>{item.extra_metadata.grupo}</p>
              <p>{item.extra_metadata.orden}</p>
              <p>{item.case_duration}</p>
              <p className={`min-w-[200px] ${item.case_result.name === "Cliente no encontrado en DB" ? "no-client" : "" }`}>
                {item.case_result.name}
              </p>
            </div>))
            }
      </div>
      <div className="flex mt-4">
        <div className="mx-4">
          {
            (selectedCase.length > 0)
            ?
            selectedCase.map((item: any, index) => 
              <p 
                className="bg-slate-100 px-3 rounded-md my-1 hover:cursor-pointer hover:bg-slate-300" 
                onClick={()=> setSelectedChat(item)} 
                key={item.time}
              >
                Chat {index + 1}
              </p>)
            : 
            <p>No hay chat</p>
          }
          </div>
          <div className="border border-slate-300">
            <p className="text-center py-1 bg-slate-300 font-semibold">CHAT PREVIEW</p>
          {
            (selectedChat)
            ?
            <Chat chat={selectedChat.text} />
            : 
            <p>Seleccione un chat</p>
          }
          </div>
      </div>
    </div>
  )
}

export default Dashboard