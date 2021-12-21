import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';
import { useState } from 'react';

function ExpenseItem(props) {
const [title, setTitle] = useState(props.title)
console.log('It is react component by using Usestate');

  const clickHandler=()=> {
    setTitle('Updated');
    
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>title change</button>;
    </Card>
  );
}

export default ExpenseItem;