import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Input, InputLabel} from '@material-ui/core';
import dados from '../admin/dados';


const Dados = dados.sobre();



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-block',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    form: {
        width: '100%',
        height: '70%',
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
    enviar: {
        
        display: 'inline-block',
        width: '100%',
        margin: '0px',
        padding: '15px 15px',
        background: 'orange',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: '18px',
        border: 'none',
    },
}));

const submitFormulario = (event) => {

console.log(Dados);
event.preventDefault();



    //const validacao = this.validador.valida(this.state);

    // if (validacao.isValid) {
    //     this.props.escutadorDeSubmit(this.state);
    //     this.setState(this.stateInicial);
    // }else{
        // const {nome, livro, preco} = validacao;
        // const campos = [nome, livro, preco];

        // const camposInvalidos = campos.filter(elem =>{
        //     return elem.isInvalid;
        // });
        // camposInvalidos.forEach(campo => {
        //     PopUp.exibeMensagem('error', campo.message);
        // });
    //}
}

const campos = ({ classes }) => {
    return (
        <div className={classes.form} >
            <form className={classes.root}>
                <h1>Seção - Sobre Nós</h1>
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="titulo" className={classes.InputLabel}>Titulo:</InputLabel>
                    <Input className={classes.Input} value={Dados.titulo} id="titulo" type="texto" required />
                </FormControl>
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="subtitulo" className={classes.InputLabel}>Subtitulo:</InputLabel>
                    <Input className={classes.Input} value={Dados.subtitulo} id="subtitulo" type="texto" required />
                </FormControl>
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="descricao" className={classes.InputLabel}>Descrição:</InputLabel>
                    <Input className={classes.Input} value={Dados.descricao} id="descricao" fullWidth multiline cols={40} rows={4} required />
                </FormControl>
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="tipo1" className={classes.InputLabel}>Item:</InputLabel>
                    <Input className={classes.Input} value={Dados.tipo1} id="tipo1" type="texto" />
                </FormControl>
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="tipo2" className={classes.InputLabel}>Item:</InputLabel>
                    <Input className={classes.Input} value={Dados.tipo2} id="tipo2" type="texto" />
                </FormControl>
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="tipo3" className={classes.InputLabel}>Item:</InputLabel>
                    <Input className={classes.Input} value={Dados.tipo3} id="tipo3" type="texto" />
                </FormControl>
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="tipo4" className={classes.InputLabel}>Item:</InputLabel>
                    <Input className={classes.Input} value={Dados.tipo4} id="tipo4" type="texto" />
                </FormControl>
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="tipo5" className={classes.InputLabel}>Item:</InputLabel>
                    <Input className={classes.Input} value={Dados.tipo5} id="tipo5" type="texto" />
                </FormControl>
                <div>
                <FormControl className={classes.root}>
                    <Input className={classes.enviar}  onClick={submitFormulario}  type="submit" value="Enviar Formário" />
                </FormControl>
                </div>
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