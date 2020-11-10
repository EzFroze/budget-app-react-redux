import React from 'react'
import { useSelector } from 'react-redux'

const Balance = () => {
  const incomeCounter = useSelector(state => state.Counter.incomeSum);
  const expenseCounter = useSelector(state => state.Counter.expenseSum);
    return (
        <div className="balance">
            <h2>Your balance</h2>
            <h3>${incomeCounter - Math.abs(expenseCounter)}</h3>
            <div className="income-expense">
                <div className="plus">
                    <h3>Income</h3>
                    <p>${incomeCounter}</p>
                </div>
                <div className="minus">
                    <h3>Expenses</h3>
                    <p>${expenseCounter}</p>
                </div>
            </div>
        </div>
    )
}

export default Balance
