import React from 'react'
import 'antd/dist/antd.css'
import './ExpenseItem.css'
import { Button } from 'antd';
import ExpenseDate from './ExpenseDate';
  
function ExpenseItem(props) {
   
    const month = props.date.toLocaleString('default', { month: 'long' });
    const year = props.date.toLocaleString('default', { month: 'numeric' });
    const day = props.date.toLocaleString('default', { day: '2-digit' });
    return (
        <div className="expense-item">
      <ExpenseDate/>
        <div className="expense-item_descritption">
         <h2>{props.title}</h2>
         </div>
       <div className="expense-item_price">${props.amount} {month}{year}{day}</div>

</div>
    );
}

export default ExpenseItem;
