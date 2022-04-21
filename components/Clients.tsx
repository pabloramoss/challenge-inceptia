import ClientSearchBox from "./ClientSearchBox";

interface Props {
  clients: any;
}

const Clients: React.FC<Props> = ({ clients }) => {
  
  return (
    <div className="flex mx-4 rounded-md bg-slate-700">
      <div className="flex flex-col w-40">
        <p className="font-semibold text-center border-b border-slate-500 py-1">CLIENTES</p>
        <ClientSearchBox />
        {(clients.length) 
        ?
        clients.map((client: any) => <button className="hover:bg-slate-600 py-1" key={client.name}>{client.name}</button>)
        : 
        <p>cargar clients</p>}
      </div>
    </div>
  )
}

export default Clients
