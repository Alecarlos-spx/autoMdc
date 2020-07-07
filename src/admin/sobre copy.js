import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Input, InputLabel} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-block',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    form: {
        width: '100%',
        height: '80%',
        overflow: 'scroll',
        overflowX: 'hidden',
    },
    Input: {
        width: '40em',
        display: 'block',
        fontSize: '16px',
    },
    InputLabel: {
        fontSize: '16px',
    },
}));



const campos = ({ classes }) => {
    return (
        <div className={classes.form} >
            <form className={classes.root}>
                <h1>Secão - Sobre Nós</h1>
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="titulo" className={classes.InputLabel}>Titulo:</InputLabel>
                    <Input className={classes.Input} id="titulo" type="texto" required />
                </FormControl>
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="subtitulo" className={classes.InputLabel}>Subtitulo:</InputLabel>
                    <Input className={classes.Input} id="subtitulo" type="texto" required />
                </FormControl>
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="descricao" className={classes.InputLabel}>Descrição:</InputLabel>
                    <Input className={classes.Input} id="descricao" fullWidth multiline cols={40} rows={4} required />
                </FormControl>
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="item1" className={classes.InputLabel}>Item:</InputLabel>
                    <Input className={classes.Input} id="item1" type="texto" />
                </FormControl>
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="item2" className={classes.InputLabel}>Item:</InputLabel>
                    <Input className={classes.Input} id="item2" type="texto" />
                </FormControl>
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="item3" className={classes.InputLabel}>Item:</InputLabel>
                    <Input className={classes.Input} id="item3" type="texto" />
                </FormControl>
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="item4" className={classes.InputLabel}>Item:</InputLabel>
                    <Input className={classes.Input} id="item4" type="texto" />
                </FormControl>
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="item5" className={classes.InputLabel}>Item:</InputLabel>
                    <Input className={classes.Input} id="item5" type="texto" />
                </FormControl>
            </form >
        </div>
    )
};



export default function NestedStylesHook() {
    const classes = useStyles();

    return (
        campos({ classes })
    );
}