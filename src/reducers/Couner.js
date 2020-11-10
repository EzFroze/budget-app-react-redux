import {DECREMENT, DELETEEXPENSE, DELETEINCOME, EXPENSE, INCOME, INCREMENT} from "../actions/actionsTypes";

const initialState = {
    incomeSum: 0,
    expenseSum: 0,
    income: [],
    expense: []
}

const Counter = (state = initialState, action) => {
    switch(action.type) {
        case DECREMENT:
            return {
                ...state,
                expenseSum: state.expenseSum - action.payload,
            }
        case INCREMENT:
            return {
                ...state,
                incomeSum: state.incomeSum + action.payload,
            }
        case INCOME:
            return {
                ...state,
                income: [...state.income, action.payload]
            }
        case EXPENSE:
            return {
                ...state,
                expense: [...state.expense, action.payload]
            }
        case DELETEINCOME:
            return {
                ...state,
                incomeSum: state.incomeSum - action.payload.amount,
                income: [...state.income.filter(el => el.id !== action.payload.id)],
            }
        case DELETEEXPENSE:
            return {
                ...state,
                expenseSum: state.expenseSum + action.payload.amount,
                expense: [...state.expense.filter(el => el.id !== action.payload.id)],
            }
        default:
            return state
    }
}

export default Counter;