import React from "react";
import ExpenseItem from "./ExpenseItem";
export const ExpenseDate=(props)=>{
    const month = props.date;
    // const day = props.date.toLocaleString('default', {day: '2-digit'});
    // const year = props.date.toLocaleString('default', {year: 'numeric'});
   

return(
    <div>
    <div>{month}</div>
   {/* <div>{year}</div> 
     <div>{day}</div> */}
     
    </div>

);

    
}
export default ExpenseDate;