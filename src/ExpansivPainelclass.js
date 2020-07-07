import React,{Component, Fragment } from 'react';
import './fonts/font-awesome/css/font-awesome.css';

import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    backgroundColor: '#B5B5B5',

    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },

  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    fontWeight: 200,

    padding: '12px 35px 12px 15px',

    width: '100%',
    backgroundColor: '#E45454',
    color: '#FFFFFF',
    border: '#ECECEC 1px solid',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 36,
    '&$expanded': {
      minHeight: 36,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',

    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

const useEstilos = () => makeStyles(
  {
    titulo: {
      textAlign: 'center',
      color: 'indigo',
      fontSize: '1.8rem'
    },
    subTitulo: {
      fontSize: '1.8rem'

    }

  })


//const [expanded, setExpanded] = React.useState('panel1');

const classes = useEstilos();

class ExpansivPainel extends Component {

  constructor (props) {
    super(props);
    this.state = {
      expanded: 'panel1',
      setExpanded: 'panel1',
    };
  }

  render() {

    const handleChange = (panel) => (event, newExpanded) => {
      this.state.setExpanded(newExpanded ? panel : false);
    };

    const [expanded, setExpanded] = this.state;
    

    return (
        <Fragment>
      <div>
        <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography className={classes.titulo}>Collapsible Group Item #1</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.subTitulo} >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Collapsible Group Item #2</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Collapsible Group Item #3</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      </Fragment>

    );
  }
}

export default ExpansivPainel;