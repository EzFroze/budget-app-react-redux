import {DECREMENT, DELETEEXPENSE, DELETEINCOME, EXPENSE, INCOME, INCREMENT} from "./actionsTypes";

export const increment = (nr) => {
    return {
        type: INCREMENT,
        payload: parseInt(nr)
    };
}

export const decrement = (nr) => {
    return {
        type: DECREMENT,
        payload: parseInt(nr)
    }
}

export const historyIncome = (name, amount) => {
    return {
        type: INCOME,
        payload: {
            name,
            amount: parseInt(amount),
            id: Date.now()
        }
    }
}

export const historyExpense = (name, amount) => {
    return {
        type: EXPENSE,
        payload: {
            name,
            amount: parseInt(amount),
            id: Date.now()
        }
    }
} 

export const deleteIncome = (id, amount) => {
    return {
        type: DELETEINCOME,
        payload: {id, amount: parseInt(amount)}
    }
}

export const deleteExpense = (id, amount) => {
    return {
        type: DELETEEXPENSE,
        payload: {id, amount: parseInt(amount)}
    }
}