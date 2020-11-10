import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteExpense } from '../actions'

const ExpenseList = () => {
    const historyCounter = useSelector(state => state.Counter);
    const dispatch = useDispatch()

    return (
       <div className="transactions transactions-expense">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
            {historyCounter.expense.map(el => (
                    <li className="transaction" key={el.id}>
                      <span className="transaction-text">{el.name}</span>
                      <span className="transaction-amount">${el.amount}</span>
                      <button className="delete-btn" onClick={() => dispatch(deleteExpense(el.id, el.amount))}>
                          <i className="fas fa-trash"></i>
                      </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ExpenseList
