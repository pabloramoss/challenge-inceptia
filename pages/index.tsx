import type { NextPage } from "next"
import { useEffect, useState } from "react"
import { getClients, getInboundCase, login } from "../utils/api"
import { parseDate } from "../utils"
import Clients from "../components/Clients"
import Dashboard from "../components/Dashboard"
import Navbar from "../components/Navbar"
import Login from "../components/Login"
import DateFilter from "../components/DateFilter"
import DateFilterButton from "../components/DateFilterButton"

const Home: NextPage = () => {
  const [token, setToken] = useState<string>("")
  const [clients, setClients] = useState<any>({})
  const [inboundCase, setInboundCase] = useState<any>({})
  const [startDate, setStartDate] = useState<any>(new Date("March 1, 2021"))
  const [endDate, setEndDate] = useState<any>(new Date("March 25, 2022"))
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [isFilterLoading, setIsFilterLoading] = useState<boolean>(false)

  useEffect(()=> {
      login().then(res=> setToken(res))
  },[])

  //Filter date request
  const handleFilter = (startDate: any, endDate: any) => {
		setIsFilterLoading(true)
    const local_updated__date__gte = parseDate(startDate)
    const local_updated__date__lte = parseDate(endDate)
    getInboundCase(token, local_updated__date__gte, local_updated__date__lte)
      .then(res => setInboundCase(res.results))
			.then(()=> setIsFilterLoading(false))
  }

  //Get data on fake login
  const getData = () => {
    const initStartDate = "2021-03-01"
    const initEndDate = "2022-03-25"
    getClients(token).then(res=>setClients(res))
    getInboundCase(token, initStartDate, initEndDate)
    .then(res=>{
      setInboundCase(res.results)
      setIsLogin(true)
    })
  }

  if (!isLogin) return <Login getData={getData} />

  return (
    <main className="text-white justify-center container mx-auto">
      <Navbar setIsLogin={setIsLogin} />
      <div className="flex gap-2 ml-2">
        <DateFilter 
          text="Desde" 
          initDate={startDate} 
          setNewDate={setStartDate} 
        />
        <DateFilter 
          text="Hasta" 
          initDate={endDate} 
          setNewDate={setEndDate} 
        />
        <DateFilterButton 
          startDate={startDate} 
          endDate={endDate} 
          isFilterLoading={isFilterLoading} 
          handleFilter={handleFilter} 
        />
      </div>
      <div className="flex mt-4 justify-self-center">
        <Clients clients={clients} />
        <Dashboard inboundCase={inboundCase} />
      </div>
    </main>
  )
}

export default Home