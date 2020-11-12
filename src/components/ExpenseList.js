import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {deleteExpense, selectExpenseHistory} from "../store/Budget"

function ExpenseList() {
  const expenseHistory = useSelector(selectExpenseHistory)
  const dispatch = useDispatch()

  const deleteExpenseBtn = (id, amount) => dispatch(deleteExpense({id, amount}))

  return (
    <div className="transactions transactions-expense">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {expenseHistory.map(el => (
          <li className="transaction" key={el.id}>
            <span className="transaction-text">{el.name}</span>
            <span className="transaction-amount">${el.amount}</span>
            <button className="delete-btn" onClick={() => deleteExpenseBtn(el.id, el.amount)}>
              <i className="fas fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExpenseList
