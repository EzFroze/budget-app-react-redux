import React from 'react'
import {useDispatch} from 'react-redux'
import {increment, decrement, incomeAddHistory, expenseAddHistory} from '../store/Budget'
import {useState} from 'react'

function AddTransaction() {
  const dispatch = useDispatch();

  const [incomeName, setIncomeName] = useState("")
  const [incomeAmount, setIncomeAmount] = useState(0)
  const [expenseName, setExpenseName] = useState("")
  const [expenseAmount, setExpenseAmount] = useState(0)

  const updateIncomeName = e => setIncomeName(e.target.value)

  const updateIncomeAmount = e => setIncomeAmount(e.target.value)

  const updateExpenseName = e => setExpenseName(e.target.value)

  const updateExpenseAmount = e => setExpenseAmount(e.target.value)


  const DispatchSubmitIncome = () => {
    if (incomeAmount && incomeName) {
      const data = {
        name: incomeName,
        amount: parseInt(incomeAmount),
        id: Date.now()
      }
      dispatch(increment(data.amount))
      dispatch(incomeAddHistory(data))
    }
    setIncomeAmount(0)
    setIncomeName("")
  }
  const DispatchSubmitExpense = () => {
    if (expenseAmount && expenseName) {
      const data = {
        name: expenseName,
        amount: parseInt(expenseAmount),
        id: Date.now()
      }
      dispatch(decrement(data.amount))
      dispatch(expenseAddHistory(data))
    }
    setExpenseAmount(0)
    setExpenseName("")
  }

  return (

    <div className="form-wrapper">
      <form>
        <div className="input-group income">
          <input type="text" placeholder="Add income..." autoComplete="off" value={incomeName}
                 onChange={updateIncomeName}/>
          <input type="number" placeholder="Amount..." autoComplete="off" value={incomeAmount}
                 onChange={updateIncomeAmount}/>
          <input type="button" value="Submit" onClick={() => DispatchSubmitIncome()}/>
        </div>
      </form>

      <form>
        <div className="input-group expense">
          <input type="text" placeholder="Add Expense..." autoComplete="off" value={expenseName}
                 onChange={updateExpenseName}/>
          <input type="number" placeholder="Amount..." autoComplete="off" value={expenseAmount}
                 onChange={updateExpenseAmount}/>
          <input type="button" value="Submit" onClick={() => DispatchSubmitExpense()}/>
        </div>
      </form>

    </div>
  )
}

export default AddTransaction
