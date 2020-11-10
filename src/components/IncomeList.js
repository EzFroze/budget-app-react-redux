import React from 'react'
import { deleteIncome } from '../actions'
import { useSelector, useDispatch } from 'react-redux';


const IncomeList = () => {
    const historyCounter = useSelector(state => state.Counter);
    const dispatch = useDispatch()


    return (
        <div className="transactions transactions-income">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {historyCounter.income.map(el => (
                    <li className="transaction" key={el.id}>
                      <span className="transaction-text">{el.name}</span>
                      <span className="transaction-amount">${el.amount}</span>
                      <button className="delete-btn" onClick={() => dispatch(deleteIncome(el.id, el.amount))}>
                          <i className="fas fa-trash"></i>
                      </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default IncomeList;

