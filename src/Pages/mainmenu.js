import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import ItemGrid from '../Molecules/griditems'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import Avatar from '@material-ui/core/Avatar'
import CircularProgress from '@material-ui/core/CircularProgress'


import { Link } from 'react-router-dom'
import { fetchTransaction } from '../actions/transaction'
import { connect } from 'react-redux'


const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    background: "red",
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  
  },
  rightIcon: {

  },
});


class ItemList extends React.Component {
  constructor(props) {
  super(props)

  this.state = {
    joined: false,
    readypurcase: "SELECT ITEM FROM STASH",
    price: "",


  }
}
 
  componentDidMount(){
console.log('Manggil sesutu saat component di render')
//2
this.props.fetchTransaction()  
  }

  handleClick = (nename) => {
    this.setState(state => ({
      readypurcase: nename
    }))
  }

render() {
  const {transactions } = this.props;

  return (



    <div style={{textAlign: "center", background:'grey', width:"100%", height:"100%"}}>
      <Grid container spacing={24} style={{padding :'15px', width:"100%", height:"100%" }}>
       
       
        <Grid item xs={12}>
        {this.state.readypurcase == "SELECT ITEM FROM STASH" ?

<Paper className={styles.paper} style={{background :'',padding:'15px'}}> 
<br></br>
        
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          SELECT ITEM FROM STASH
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
</Paper>


      :
          <Paper className={styles.paper} style={{background :'',padding:'15px'}}> 
          <img src="https://placeimg.com/640/640/any"/>
          <br></br>
          ITEM NAME 
          <br></br>
          <br></br>
          HARGA
          <br></br>
          PRICE TAGS
          <br></br>
          <br></br>

        <Button variant="contained" color="primary" className={styles.button}>BUY NOW</Button>
     
          </Paper>

        }
        
        </Grid>


 {transactions.length <= 0 ?
      <CircularProgress />
      :
        transactions.map((transaction, index) => (
          <Grid item xs={3}>
                <ItemGrid title={transaction.name}
                harga = {transaction.height}
                pic  = {transaction.imge}
                code  = {transaction.mass}>
                </ItemGrid>
          </Grid>
      ))}

      </Grid>

    </div>
  );
}

}


// 1
const mapStatetoProps = state => ({
  transactions: state.transaction.transactionData
})

const mapDispatchToProps = dispatch => ({
  fetchTransaction:() => dispatch(fetchTransaction())
})

//export default withStyles(styles)(ItemList);
export default connect (mapStatetoProps, mapDispatchToProps)(ItemList)