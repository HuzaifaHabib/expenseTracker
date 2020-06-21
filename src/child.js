import React, { useState } from 'react';
import './App.css';
import { TransactionContext } from './transContext'
import { useContext } from 'react';


function App() {

    let { transactions, addTransaction, deleteTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        addTransaction({
            amount: Number(newAmount),
            desc: String(newDesc),
            id: transactions.length
        })
    }

    function handleDelete(ind) {
        console.log(ind)
        deleteTransaction({
            index: ind
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
            <h1 className="text-center dosis">Expense Tracker</h1>
            <h3 className="dosis">Your balance</h3>
            <h1 className="montserrat"> {getIncome() + getExpense()}</h1>

            <div className="expense-contaner montserrat">
                <h3>YOUR INCOME <br /> {getIncome()}</h3>
                <h3>YOUR EXPENSE<br /> {getExpense()}</h3>

            </div>
            <h3 className="dosis">History</h3>
            <hr />
            <ul className="transaction-list">
                {transactions.map((transObj, ind) => {
                    return (
                        <li key={ind}>
                            <span>{transObj.description}</span>
                            <span>{transObj.amount}</span>
                            <span ><button onClick={() => { handleDelete(transObj.id) }}>delete</button></span>
                        </li>
                    )
                })}

            </ul>
            <h3 className="dosis">Add new Transaction</h3>
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
                <input className="button" type="submit" value="Add Transaction" />
            </form>
        </div>
    );
}

export default App;