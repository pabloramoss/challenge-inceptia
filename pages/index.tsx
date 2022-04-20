import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { getClients, getInboundCase, login } from "../utils/api"
import { parseDate } from '../utils'
import Clients from '../components/Clients'
import Dashboard from "../components/Dashboard"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const Home: NextPage = () => {
  const [token, setToken] = useState<string>("")
  const [clients, setClients] = useState<any>({})
  const [inboundCase, setInboundCase] = useState<any>({})
  const [startDate, setStartDate] = useState<any>(new Date("March 1, 2021"))
  const [endDate, setEndDate] = useState<any>(new Date("March 25, 2022"))
  const [isLogin, setIsLogin] = useState<boolean>(false)

  useEffect(()=> {
      login().then(res=> setToken(res))
  },[])
  console.log(inboundCase)
  const handleFilter = (startDate: any, endDate: any) => {
    const local_updated__date__gte = parseDate(startDate)
    const local_updated__date__lte = parseDate(endDate)
    getInboundCase(token, local_updated__date__gte, local_updated__date__lte)
      .then(res => setInboundCase(res))
  }

  const getData = () => {
    const initStartDate = "2021-03-01"
    const initEndDate = "2022-03-25"
    getClients(token).then(res=>setClients(res))
    getInboundCase(token, initStartDate, initEndDate)
    .then(res=>{
      setInboundCase(res)
      setIsLogin(true)
    })
  }

  if (!isLogin) return <button className='bg-slate-300 px-3 font-semibold' onClick={getData}>Login</button>

  return (
    <div>
      <div className='flex gap-4 mt-10'>
        <div>
          <p className='text-xs'>Desde</p>
          <DatePicker 
            dateFormat="dd/MM/yyyy" 
            className='text-center bg-slate-100 rounded-md border border-sky-500' 
            selected={startDate} 
            onChange={(date) => setStartDate(date)} 
          />
        </div>
        <div>
          <p className='text-xs'>Hasta</p>
          <DatePicker 
            dateFormat="dd/MM/yyyy" 
            className='text-center bg-slate-100 rounded-md border border-sky-500' 
            selected={endDate} 
            onChange={(date) => setEndDate(date)} 
          />
        </div>
        <button 
          className='px-6 rounded-md bg-slate-200 self-end' 
          onClick={()=>handleFilter(startDate, endDate)}
        >
          Filtrar
        </button>
      </div>
      <div className='flex mt-10'>
        <Clients clients={clients} />
        <Dashboard inboundCase={inboundCase} />
      </div>
    </div>
  )
}

export default Home