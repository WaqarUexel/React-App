import React from 'react'
import { Button } from 'antd';

import './ExpenseForm.css';
const ExpenseForm=()=> {
    return (
        <form>
        <div className='new-expense_controls'>
        <div className='new-expense_control'>
    <label>title</label>
    <input type='text'/>
</div>

<div className='new-expense_control'>
    <label>Amount</label>
    <input type='number' min='0.01' step="0.01"/>
</div>

<div className='new-expense_control'>
    <label>Date</label>
    <input type='date' min="2010-02-20" max="2021-20-03"/>
</div>

        </div>
        <div className='new-expense_actions'>
        <button type="Submit">
Add Expense    </button>
        </div>
        </form>
            
        
    );
};

export default ExpenseForm;
