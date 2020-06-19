import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container" >
        <h1 className="text-center">Expense Tracker</h1>
        <h3>Your balance <br/> $250</h3>

        <div className="expense-contaner">
        <h3>Your Income <br/> $500</h3>
        <h3>Your Expense <br/> $350</h3>

        </div>
        <h3>History</h3>
        <hr/>
        <ul className="transaction-list">
            <li>    
                <span>Cash</span>
                <span>+500</span>

            </li>
            <li>    
                <span>Cash</span>
                <span>+500</span>

            </li>
            <li>    
                <span>Cash</span>
                <span>+500</span>

            </li>
        </ul>
        <h3>Add new Transaction</h3>
        <hr/>
        <form className="transaction-form"> 
            <label>
                Enter Description <br/>
                <input type="text" required="true" />
            </label>
            <br/>
            <label>
                Enter Amount <br/>
                <input type="text" required="true"/>
            </label>
            <input type="submit" value="Add Transaction" />
        </form>
    </div>
  );
}

export default App;