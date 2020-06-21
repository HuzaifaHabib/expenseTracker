import React, { createContext, useReducer } from "react";
import TransactionReducer from './transReducer';

const Initialtransactions = [
    { amount: 500, description: "Cash", id: 0 },
    { amount: -300, description: "Books",id: 1 },
    { amount: -100, description: "Food" , id: 2},
]

export const TransactionContext = createContext(Initialtransactions);



export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, Initialtransactions)

    function addTransaction(transObj) {
        dispatch({
            type: "ADD TRANSACTION",
            payload: {
                amount: transObj.amount,
                description: transObj.desc,
                id: transObj.id
            }
        })
    }

    function deleteTransaction(transObj) {
        dispatch({
            type: "DELETE TRANSACTION",
            payload: {
                id: transObj.index
            }
        })
    }

    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction,
            deleteTransaction
        }}>
            {children}

        </TransactionContext.Provider>
    )
}