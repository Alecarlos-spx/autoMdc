//Importar as dependências
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Importar as páginas
import Main from './Main';
import Admin from './admin/index';


//Criar o componentes com as rotas
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/admin" component={Admin} />

            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;