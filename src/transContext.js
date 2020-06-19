const { createContext, useReducer } = require("react")
import TransactionReducer from './transReducer'




 const Initialtransactions = [
    { amount: 500, description: "Cash" },
    { amount: -300, description: "Books" },
    { amount: -100, description: "Food" },
]

export const TransactionContext = createContext(Initialtransactions);


let [state, dispatch] = useReducer(TransactionReducer, Initialtransactions)