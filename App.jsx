import { useState } from 'react'
import './App.css';

import left_arrow from "./assets/left-arrow.png";
import right_arrow from "./assets/right-arrow.png";

const daysOfWeek =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const months =["January","February","March","April","May","June","July","August","September","October","November","December"];


function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysInMonth =()=>{
    const daysArray =[];
    const firstDay = new Date(selectedDate.getFullYear(),selectedDate.getMonth(),1);

    
    const lastDay = new Date(selectedDate.getFullYear(),selectedDate.getMonth() + 1, 0);
 
    for(let i=0;i<firstDay.getDay();i++){
      daysArray.push(null);
    }
    for(let i=1;i<=lastDay.getDate();i++){
      daysArray.push(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i));
    }

    return daysArray;
  };


const isSameDay = (date1,date2)=>{
  return date1.getDate()=== date2.getDate() && date1.getMonth() === date2.
  getMonth() && date1.getFullYear() === date2.getFullYear();
}



   const handleChangeMonth = (e)=>{
const newMonth=parseInt(e.target.value,10)
setSelectedDate(new Date(selectedDate.getFullYear(),newMonth,1));

};

const handleChangeYear = (e)=>{
  const newYear = parseInt(e.target.value,10);
  setSelectedDate(new Date(newYear, selectedDate.getMonth(), 1));
};

  return (
    <>
      <div className='calendar'>
<div className="header">
  <button onClick={()=>{setSelectedDate(new Date(selectedDate.getFullYear(),selectedDate.getMonth()-1,1))}}>
    <img src={left_arrow}  />
  </button>
  <select value={selectedDate.getMonth()} onChange={handleChangeMonth}>
    

    {
      months.map((month,index)=>(
        <option key={index} value={index}>
          {month}
        </option>
      ))
    }
  </select>
  <select value={selectedDate.getFullYear()} onChange={handleChangeYear}>
{
  Array.from({length:10},(_,i)=> selectedDate.getFullYear()
  - 5 + i).map((year)=>(
    <option key={year} value={year}>{year}</option>
  ))
}
  </select>
  <button onClick={()=>{setSelectedDate(new Date(selectedDate.getFullYear(),selectedDate.getMonth()+1,1))}}>
    <img src={right_arrow} />
  </button>
</div>

<div className="daysOfWeek">
  {daysOfWeek.map((day)=>(
    <div key={day}>{day}</div>
  ))}
</div>
<div className="days">
  {daysInMonth().map((day,index)=>(
    <div key={index} className={day ?(isSameDay(day, new Date()))? "day current":"day" : "empty"}>{day ? day.getDate(): ""}</div>
  ))}
</div>
      </div>
    
    
    </>
  );
};

export default App
