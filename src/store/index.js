import {configureStore} from "@reduxjs/toolkit"
import BudgetReducer from "./Budget"

export default configureStore({
  reducer: {
    budget: BudgetReducer
  }
})

