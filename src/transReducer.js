
const TransactionReducer = ((state, action)=>{
    switch(action.type) {
        case "ADD TRANSACTION" :{
            return [action.payload, ...state]
        }
        case "DELETE TRANSACTION" : {
            const newState = state.filter((trans) => trans.id !== action.payload.id)
            console.log("This is Old state ")
            console.log(state)
            console.log("This is new state ")
            console.log(newState)

            return newState;

        }
        default :
            return state;

    }
})

export default TransactionReducer;


