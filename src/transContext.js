import React, { createContext, useReducer } from "react";
import TransactionReducer from './transReducer';

const Initialtransactions = [
    { amount: 500, description: "Cash" },
    { amount: -300, description: "Books" },
    { amount: -100, description: "Food" },
]

export const TransactionContext = createContext(Initialtransactions);



export const TransactionProvider = ({children})=> {
    let [state, dispatch] = useReducer(TransactionReducer, Initialtransactions)

    function addTransaction (transObj) {
        dispatch({
            type: "ADD TRANSACTION",
            payload: { 
                amount: transObj.amount, 
                description: transObj.desc 
            }
        })
    }

    return(
        <TransactionContext.Provider value={{
            transactions : state,
            addTransaction
        }}>
            {children}

        </TransactionContext.Provider>
    )
}