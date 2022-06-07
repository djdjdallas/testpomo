import React, {useState} from 'react'
import { Card } from 'react-bootstrap'

function TomatoCounter() {
 const [allTomatoes, setAllTomatoes] = useState({});
 
    const days = [
     "Mon", "Tue", "Wed", "Thu", "Frid", "Sat", "Sun"
 ]

 function addTomato(){
     const newTomatoes = {...allTomatoes};
     const currentDayTomatoes = newTomatoes[selectedDay];
     if (currentDayTomatoes ) {
         newTomatoes[selectedDay] = currentDayTomatoes + "🍅";
     } else { 
        newTomatoes[selectedDay] = '🍅'
    }
     setAllTomatoes(newTomatoes)
 }
 function minusTomato(){
     const newTomatoes ={...allTomatoes}
     const currentDayTomatoes = newTomatoes[selectedDay]
     if (currentDayTomatoes) {
         newTomatoes[selectedDay] = currentDayTomatoes.slice(0, -2);
     }
     setAllTomatoes(newTomatoes)
 }



 const [ selectedDay, setSelectedDay] = useState('');
 console.log("this is", selectedDay)
  return (
    <div className='mx-20 pb-10 bg-gradient-to-r from-red-100 to-red-500'>
        <Card>
  <Card.Header className='font-bold text-3xl flex justify-center mt-14 pt-5 text-black'>Tomato Counter</Card.Header>
 {days.map((day) => <div
 
  className='flex translate-x-48'>
     <h3 className='font-bold mr-10 mt-10'>{day}</h3><div
     onClick={() =>  setSelectedDay(day)}
      className='mt-10 w-1/2 h-12 border-black border-2 text-2xl'
      style={selectedDay === day ? {background: 'white'} : {}}>
   {allTomatoes[day]}
     </div>
 </div>)}
</Card>
<div className='flex justify-center mt-10 mb-5'>
    <button onClick={minusTomato} className='py-2 px-4 rounded bg-black text-red-100 font-bold hover:bg-red-800 hover:text-black' >Minus Tomato</button>
    <button onClick={addTomato}  className='py-2 ml-5  px-4 rounded bg-black text-red-100 font-bold hover:bg-red-800 hover:text-black' >Add Tomato</button>
</div>
    </div>
  )
}

export default TomatoCounter