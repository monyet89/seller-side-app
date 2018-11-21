const initialState = {
    transactionData: [],
    transactionTotal: 0,
  }
  
  const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEMS': 
      return{
        ...state, 
        transactionData: action.payload.transactions,
      }
  
      default:
        return state
    }
  }
  
  export default transactionReducer