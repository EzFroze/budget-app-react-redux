import React from 'react'
import {useSelector} from 'react-redux'
import {selectIncomeSum, selectExpenseSum} from "../store/Budget"

function Balance() {
  const incomeSum = useSelector(selectIncomeSum)
  const expenseSum = useSelector(selectExpenseSum)
  return (
    <div className="balance">
      <h2>Your balance</h2>
      <h3>${incomeSum - Math.abs(expenseSum)}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>${incomeSum}</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>${expenseSum}</p>
        </div>
      </div>
    </div>
  )
}

export default Balance
