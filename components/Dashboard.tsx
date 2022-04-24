import { useState } from "react";
import Chat from "./Chat";

interface Props {
  inboundCase: any;
}

const Dashboard: React.FC<Props> = ({ inboundCase }) => { 
  const [selectedCase, setSelectedCase] = useState<any[]>([])

  return (
    <div className="max-w-[1100px]">
      <p className="font-semibold text-center rounded-t-md border-b border-slate-500 bg-slate-700 py-1">REPORTES</p>
      <div className="grid grid-cols-9 shadow-lg bg-slate-700 text-xs text-center font-semibold py-2">
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
          inboundCase.map((item: any) => (
            <div onClick={()=> setSelectedCase(item.case_log.responses)} 
              key={item.id} 
              className="px-4 hover:cursor-pointer hover:bg-neutral-500 grid py-2 grid-cols-9 bg-slate-600 text-xs border border-gray-700"
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
            </div>
          ))
        }
      </div>
      <Chat responses={selectedCase} />
    </div>
  )
}

export default Dashboard