import React, { useState } from 'react';
import './App.css';
import { TransactionContext } from './transContext'
import { useContext } from 'react';


function App() {

    let { transactions, addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newDesc, newAmount);
        addTransaction({
            amount: Number(newAmount),
            desc: String(newDesc)
        })
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0) {
                income += transactions[i].amount
            }
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0) {
                expense += transactions[i].amount
            }
        }
        return expense;
    }

    return (
        <div className="container" >
            <h1 className="text-center">Expense Tracker</h1>
    <h3>Your balance <br /> {getIncome() + getExpense()}</h3>

            <div className="expense-contaner">
                <h3>Your Income <br /> {getIncome()}</h3>
                <h3>Your Expense <br /> {getExpense()}</h3>

            </div>
            <h3>History</h3>
            <hr />
            <ul className="transaction-list">
                {transactions.map((transObj, ind) => {
                    return (
                        <li key={ind}>
                            <span>{transObj.description}</span>
                            <span>{transObj.amount}</span>

                        </li>
                    )
                })}

            </ul>
            <h3>Add new Transaction</h3>
            <hr />
            <form className="transaction-form" onSubmit={handleSubmit}>
                <label>
                    Enter Description <br />
                    <input type="text" required={true} onChange={(ev) => setDesc(ev.target.value)} />
                </label>
                <br />
                <label>
                    Enter Amount <br />
                    <input type="text" required={true} onChange={(ev) => setAmount(ev.target.value)} />
                </label>
                <input type="submit" value="Add Transaction" />
            </form>
        </div>
    );
}

export default App;