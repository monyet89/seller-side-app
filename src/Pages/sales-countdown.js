import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import QRCode  from 'qrcode.react'

class SalesCountdown extends React.Component {
  constructor(props) {
  super(props)

  this.state = {
    joined: false,
    readypurcase: "SELECT ITEM FROM STASH",
    price: "",
  }
}
render() {

  return (

  <React.Fragment style={{padding: '15px',}}>
       <Grid container spacing={24} style={{padding: '15px', height:"1080px"}}>
      
        <Grid item xs={18} sm={9}>
          <Paper>
            <div style={{}}>
          <QRCode value="http://facebook.github.io/react/"  />
          </div>
            </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper >xs=12 sm=6</Paper>
        </Grid>
      
      </Grid>
  </React.Fragment>
)
  }
}


export default SalesCountdown