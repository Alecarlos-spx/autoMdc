import React, { Fragment, Component } from 'react';
import Expansive from './ExpansivPainel';

import image1 from './images/section-image-1.png';

import dados from './admin/dados';


const Dados = dados.sobre();


class Sobre extends Component {

    render() {
        return (
            <Fragment>
               {/*<Fade timeout={6000} in={true}>*/}
                {/* section start */}
                <section className="section clearfix no-view secPadding" data-animation-effect="fadeIn">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 id="about" className="title text-center">{Dados.titulo}</h1>
                                <p className="lead text-center">{Dados.subtitulo}</p>
                                <div className="space"></div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src={image1} alt="" />
                                        <div className="space"></div>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{Dados.descricao}</p>
                                        <ul className="list-unstyled">
                                            <li><i className="fa fa-arrow-circle-right pr-10 colored"></i>{Dados.tipo1}  </li>
                                            <li><i className="fa fa-arrow-circle-right pr-10 colored"></i>{Dados.tipo2}  </li>
                                            <li><i className="fa fa-arrow-circle-right pr-10 colored"></i>{Dados.tipo3}  </li>
                                            <li><i className="fa fa-arrow-circle-right pr-10 colored"></i>{Dados.tipo4}  </li>
                                            <li><i className="fa fa-arrow-circle-right pr-10 colored"></i>{Dados.tipo5}  </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="space"></div>
                                <h2>{Dados.titulo2}</h2>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>{Dados.descricao2}</p>
                                        <ul className="list-unstyled">
                                            <li><i className="fa fa-arrow-circle-right pr-10 colored"></i>{Dados.tipo6}  </li>
                                            <li><i className="fa fa-arrow-circle-right pr-10 colored"></i>{Dados.tipo7}  </li>
                                            <li><i className="fa fa-arrow-circle-right pr-10 colored"></i>{Dados.tipo8}  </li>
                                            <li><i className="fa fa-arrow-circle-right pr-10 colored"></i>{Dados.tipo9}  </li>
                                            <li><i className="fa fa-arrow-circle-right pr-10 colored"></i>{Dados.tipo10}  </li>
                                        </ul>
                                        <p>{Dados.descricao3}</p>
                                    </div>
                                    <div className="col-md-6">
                                    


                                    <Expansive/>

                                    </div>

                                    {/* <div className="col-md-6">
                                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="headingOne">
                                                    <h4 className="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            Collapsible Group Item #1
                                          </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                                    <div className="panel-body">
                                                        Consectetur adipisicing  sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat ntium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earumdignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt.
                                      </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="headingTwo">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            Collapsible Group Item #2
                                          </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                    <div className="panel-body">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat ntium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earumdignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt.
                                      </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="headingThree">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            Collapsible Group Item #3
                                          </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                                    <div className="panel-body">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi adipisci illo, voluptatum ipsam fuga error commodi architecto, laudantium culpa tenetur at id, beatae placeat deserunt iure quas voluptas fugit eveniet.
                                      </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* section end */}
                    {/*</Fade>*/}
            </Fragment>
        )
    }
}
export default Sobre;