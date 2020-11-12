import {createSlice} from "@reduxjs/toolkit"

const budgetSlice = createSlice({
  name: "budget",
  initialState: {
    incomeSum: 0,
    expenseSum: 0,
    income: [],
    expense: []
  },
  reducers: {
    increment(state, action) {
      state.incomeSum += action.payload
    },
    decrement(state, action) {
      state.expenseSum -= action.payload
    },
    incomeAddHistory(state, action) {
      state.income.push(action.payload)
    },
    expenseAddHistory(state, action) {
      state.expense.push(action.payload)
    },
    deleteIncome(state, action) {
      state.income = state.income.filter(el => el.id !== action.payload.id)
      state.incomeSum = state.incomeSum - action.payload.amount
    },
    deleteExpense(state, action) {
      state.expense = state.expense.filter(el => el.id !== action.payload.id)
      state.expenseSum = state.expenseSum + action.payload.amount
    }
  }
})

export const {increment, decrement, expenseAddHistory, deleteExpense, incomeAddHistory, deleteIncome} = budgetSlice.actions

export const selectIncomeSum = state => state.budget.incomeSum

export const selectExpenseSum = state => state.budget.expenseSum

export const selectExpenseHistory = state => state.budget.expense

export const selectIncomeHistory = state => state.budget.income

export default budgetSlice.reducer