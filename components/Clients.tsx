
interface Props {
  clients: any;
}

const Clients: React.FC<Props> = ({ clients }) => {
  
  return (
    <main className="">
      <div className="flex">
        <div className="flex flex-col w-40">
          <p className="font-semibold text-center bg-slate-200">CLIENTE</p>
          {(clients.length) 
          ?
          clients.map((client: any) => <button className="bg-slate-100" key={client.name}>{client.name}</button>)
          : 
          <p>cargar clients</p>}
        </div>
      </div>
    </main>
  )
}

export default Clients
