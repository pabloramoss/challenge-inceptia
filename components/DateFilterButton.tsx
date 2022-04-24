interface Props {
  handleFilter: any;
  isFilterLoading: boolean;
  startDate: any;
  endDate: any;
}

const DateFilter: React.FC<Props> = ({ handleFilter, isFilterLoading, startDate, endDate }) => {
  return (
    <button 
      type="button" 
      onClick={()=>handleFilter(startDate, endDate)} 
      className="px-6 rounded-md bg-slate-700 self-end" 
      disabled={isFilterLoading}
    >
      {isFilterLoading
        ?
        "Cargando..."
        :
        "Filtrar"
      }
    </button>
  )
}

export default DateFilter
