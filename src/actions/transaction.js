import axios from 'axios'

export const addTansaction = (transactions) => ({
    type: 'ADD_ITEMS',
    payload:{
        transactions: transactions
    }
  
})

export const fetchTransaction = () => {
    return (dispatch) => {
        axios.get('http://gunawansusanto.net/labs/alwaysright/mynextswapi.json').then(response => {
            const transactions = response.data.results

dispatch({
    type: 'ADD_ITEMS',
    payload:{
        transactions : transactions
    }
})

        })
    }

}