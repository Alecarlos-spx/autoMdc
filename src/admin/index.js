import React, { Component } from 'react';

import Sobre from './sobre';


import { makeStyles } from '@material-ui/core/styles';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ImageIcon from "@material-ui/icons/Image";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import WorkIcon from "@material-ui/icons/Work";
import { Grid, Card, CardHeader, CardContent, Avatar, List, ListItem, ListItemText } from "@material-ui/core";




import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';



const useStyles = makeStyles((theme) => ({

  cores: {
    backgroundColor : '#9575cd',
  },

  root: {
    padding: "10px 20px 10px 10px",
    zIndex: 999,
    position: "absolute",
    background: "#d0D0D0", //"#7159C1"
   
  },


  title: {
    color: "#fff",
    fontWeight: "bold",
    flexGrow: 1,
  },

  paper1: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  header: {
    display: "flex",
    backgroundColor: "#fff",
    height: "10vh",
    
  },
  card: {
    display: "flex",
    height: "85vh"
  },
  rightBorder: {
    borderRight: "solid #d0D0D0 1px"
  },
  content: {
    marginTop: 0
  },
  background: {
    position: "absolute",
    height: 200,
    width: "100%",
    top: 0,
    
    
  },
  rightContainer: {
    backgroundColor: "#d0D0D0",
    flex: 1
  },
  leftContainer: {
    backgroundColor: "#d0D0D0",
    flex: 1
  },
  heightAdjust: {
    display: "flex",
    flexDirection: "column",
    overflow: 'visible',
    
  },
  paper: {
    background: "#9de1fe",
    padding: 0
  },


}));









const list = [
  { id: 1, name: "Teste1", text: "Lorem ipsum", image: <ImageIcon /> },
  { id: 2, name: "Teste1", text: "Lorem ipsum", image: <WorkIcon /> },
  { id: 3, name: "Teste1", text: "Lorem ipsum", image: <BeachAccessIcon /> }
];

const LeftContainer = ({ classes }) => (
  <Grid item xs={2} className={classes.paper1}>
                <p>Testemunhos</p>
                <p>Serviços</p>
                <p>Sobre Nós</p>
                <p>Trabalho</p>
                <p>Trabalho</p>
    {/*  <CardHeader
            className={classes.rightBorder}
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                H
              </Avatar>
            }
          /> }
          { <Paper className={classes.paper} elevation={0}>
            <Typography className={classes.information} variant="subheader">
              Acesse 
            </Typography>
          </Paper> }
          { <List>
            {list.map(item => (
              <ListItem>
                <Avatar>{item.image}</Avatar>
                <ListItemText primary={item.name} secondary={item.text} />
              </ListItem>
            ))}
            </List> */}
  </Grid>
);

const RightContainer = ({ classes }) => (
  
  <Grid className={classes.heightAdjust} item xs={10} >

    {/* <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                <ImageIcon />
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="Dashboard"
          /> */}
    
    <CardContent className={[classes.rightContainer, classes.content]} >
    <Sobre/>
      </CardContent>
  </Grid>
);



 

export default function CenteredGrid() {
  const classes = useStyles();
  return (
    
    <div className={classes.background}>
      <Grid container className={classes.root} >
        <Grid item xs={12} className={classes.header}>
          <Grid container>
            Administração
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.card} square elevation={2} >
            <Grid container>
              <LeftContainer classes={classes}/>
              <RightContainer classes={classes} />
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}


