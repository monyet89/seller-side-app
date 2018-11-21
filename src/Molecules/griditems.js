import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { changePageTitle } from '../actions/app'



const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

class ItemGrid extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      joined: false
    }
  }

  handleClick = () => {
    this.setState(state => ({
      joined: !state.joined
    }))
  }

  render() {
    const {
      title,
      harga,
      pic,
      code
    } = this.props

  return (
    
    <Paper>
      <Grid container spacing={3}>
        <Grid item  style={{padding:"15px",}}>
          <ButtonBase style={{width: 128,
    height: 128,}}>
            <img  src={pic} style = {{maxHeight: 128,}}  />
          </ButtonBase>
        </Grid>

        <Grid item xs={3} sm container> 
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
              {title}
              </Typography>
              <Typography gutterBottom>RP {harga}</Typography>
              <Typography color="textSecondary">ID: {code}</Typography>
            </Grid>
            <Grid item>
              <Button color="primary" >Add to Stash</Button>
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>
    </Paper>
  );
}
}


const mapDispatchToProps = (dispatch) => {
  return {
    magicButton: (judulBaru) => dispatch(changePageTitle(judulBaru)),
  }
}

ItemGrid = connect(null, mapDispatchToProps)(ItemGrid)
export default ItemGrid
