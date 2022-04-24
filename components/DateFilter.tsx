import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

interface Props {
  text: string;
  initDate: any;
  setNewDate: any;
}

const DateFilter: React.FC<Props> = ({ text, initDate, setNewDate }) => {
  return (
    <div className="ml-2">
      <p className="py-2 text-xs">{text}</p>
      <DatePicker 
        dateFormat="dd/MM/yyyy" 
        className="w-40 font-semibold text-center bg-slate-100 rounded-md border border-sky-500 text-slate-500"
        selected={initDate} 
        onChange={(date) => setNewDate(date)} 
      />
  </div>
  )
}

export default DateFilter
