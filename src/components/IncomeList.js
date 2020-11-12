import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {deleteIncome, selectIncomeHistory} from "../store/Budget"


function IncomeList() {
  const incomeHistory = useSelector(selectIncomeHistory)
  const dispatch = useDispatch()

  const deleteIncomeBtn = (id, amount) => dispatch(deleteIncome({id, amount}))

  return (
    <div className="transactions transactions-income">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {incomeHistory.map(el => (
          <li className="transaction" key={el.id}>
            <span className="transaction-text">{el.name}</span>
            <span className="transaction-amount">${el.amount}</span>
            <button className="delete-btn" onClick={() => deleteIncomeBtn(el.id, el.amount)}>
              <i className="fas fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IncomeList;

