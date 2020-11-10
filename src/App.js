import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import AddTransactiom from './components/AddTransaction';
import IncomeList from './components/IncomeList';
import ExpenseList from './components/ExpenseList';


function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header/>
        <Balance/>
        <AddTransactiom/>
        <IncomeList/>
        <ExpenseList/>
      </div>
    </div>
  );
}

export default App;
