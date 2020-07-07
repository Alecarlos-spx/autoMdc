import React, { Fragment, Component } from 'react';

import port1 from './images/portfolio-1.jpg';
import port2 from './images/portfolio-2.jpg';
import port3 from './images/portfolio-3.jpg';
import port4 from './images/portfolio-4.jpg';
import port5 from './images/portfolio-5.jpg';
import port6 from './images/portfolio-6.jpg';
import port7 from './images/portfolio-7.jpg';
import port8 from './images/portfolio-8.jpg';
import port9 from './images/portfolio-9.jpg';
import port10 from './images/portfolio-10.jpg';
import port11 from './images/portfolio-11.jpg';
import port12 from './images/portfolio-12.jpg';

class Trabalhos extends Component {
    render(){
        return(
            <Fragment>
               
                {/* section start */}
        <section className="section secPadding">
          <div className="container">
            <h1 className="text-center title" id="portfolio">Nosso Trabalho</h1>
            <div className="separator"></div>
            <p className="lead text-center">Lorem ipsum dolor sit amet laudantium molestias similique.<br /> Quisquam incidunt ut laboriosam.</p>
            <br />
            <div className="row no-view" data-animation-effect="fadeIn">
              <div className="col-md-12">

                {/* isotope filters start */}
                <div className="filters text-center" style={{ display: 'none' }}>
                  <ul className="nav nav-pills">
                    <li className="active"><a href="#" data-filter="*">All</a></li>
                    <li><a href="#" data-filter=".web-design">Web design</a></li>
                    <li><a href="#" data-filter=".app-development">App development</a></li>
                    <li><a href="#" data-filter=".mobile-apps">Mobile Apps</a></li>
                  </ul>
                </div>
                {/* isotope filters end */}

                {/* portfolio items start */}
                <div className="isotope-container row grid-space-20">
                  <div className="col-sm-6 col-md-3 isotope-item web-design">
                    <div className="image-box">
                      <div className="overlay-container">
                        <img src={port1} alt="" />
                        <a className="overlay" data-toggle="modal" data-target="#project-1">
                          <i className="fa fa-search-plus"></i>

                        </a>
                      </div>
                      <a className="btn btn-default btn-block" data-toggle="modal" data-target="#project-1">Project Title</a>
                    </div>
                    {/* Modal */}
                    <div className="modal fade" id="project-1" tabIndex="-1" role="dialog" aria-labelledby="project-1-label" aria-hidden="true">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="project-1-label">Project Title</h4>
                          </div>
                          <div className="modal-body">

                            <div className="row">
                              <div className="col-md-12">
                                <img src={port1} alt="" />
                                <br />
                                <h3>Project Description</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt.</p>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal end */}
                  </div>

                  <div className="col-sm-6 col-md-3 isotope-item app-development">
                    <div className="image-box">
                      <div className="overlay-container">
                        <img src={port2} alt="" />
                        <a className="overlay" data-toggle="modal" data-target="#project-2">
                          <i className="fa fa-search-plus"></i>

                        </a>
                      </div>
                      <a className="btn btn-default btn-block" data-toggle="modal" data-target="#project-2">Project Title</a>
                    </div>
                    {/* Modal */}
                    <div className="modal fade" id="project-2" tabIndex="-1" role="dialog" aria-labelledby="project-2-label" aria-hidden="true">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="project-2-label">Project Title</h4>
                          </div>
                          <div className="modal-body">

                            <div className="row">
                              <div className="col-md-12">
                                <img src={port2} alt="" />
                                <br />
                                <h3>Project Description</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt.</p>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal end */}
                  </div>

                  <div className="col-sm-6 col-md-3 isotope-item web-design">
                    <div className="image-box">
                      <div className="overlay-container">
                        <img src={port3} alt="" />
                        <a className="overlay" data-toggle="modal" data-target="#project-3">
                          <i className="fa fa-search-plus"></i>
                        </a>
                      </div>
                      <a className="btn btn-default btn-block" data-toggle="modal" data-target="#project-3">Project Title</a>
                    </div>
                    {/* Modal */}
                    <div className="modal fade" id="project-3" tabIndex="-1" role="dialog" aria-labelledby="project-3-label" aria-hidden="true">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="project-3-label">Project Title</h4>
                          </div>
                          <div className="modal-body">

                            <div className="row">
                              <div className="col-md-12">
                                <img src={port3} alt="" />
                                <br />
                                <h3>Project Description</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt.</p>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal end */}
                  </div>

                  <div className="col-sm-6 col-md-3 isotope-item mobile-apps">
                    <div className="image-box">
                      <div className="overlay-container">
                        <img src={port4} alt="" />
                        <a className="overlay" data-toggle="modal" data-target="#project-4">
                          <i className="fa fa-search-plus"></i>
                        </a>
                      </div>
                      <a className="btn btn-default btn-block" data-toggle="modal" data-target="#project-4">Project Title</a>
                    </div>
                    {/* Modal */}
                    <div className="modal fade" id="project-4" tabIndex="-1" role="dialog" aria-labelledby="project-4-label" aria-hidden="true">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="project-4-label">Project Title</h4>
                          </div>
                          <div className="modal-body">

                            <div className="row">
                              <div className="col-md-12">
                                <img src={port4} alt="" />
                                <br />
                                <h3>Project Description</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt.</p>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal end */}
                  </div>

                  <div className="col-sm-6 col-md-3 isotope-item app-development">
                    <div className="image-box">
                      <div className="overlay-container">
                        <img src={port5} alt="" />
                        <a className="overlay" data-toggle="modal" data-target="#project-5">
                          <i className="fa fa-search-plus"></i>
                        </a>
                      </div>
                      <a className="btn btn-default btn-block" data-toggle="modal" data-target="#project-5">Project Title</a>
                    </div>
                    {/* Modal */}
                    <div className="modal fade" id="project-5" tabIndex="-1" role="dialog" aria-labelledby="project-5-label" aria-hidden="true">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="project-5-label">Project Title</h4>
                          </div>
                          <div className="modal-body">

                            <div className="row">
                              <div className="col-md-12">
                                <img src={port5} alt="" />
                                <br />
                                <h3>Project Description</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt.</p>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal end */}
                  </div>

                  <div className="col-sm-6 col-md-3 isotope-item web-design">
                    <div className="image-box">
                      <div className="overlay-container">
                        <img src={port6} alt="" />
                        <a className="overlay" data-toggle="modal" data-target="#project-6">
                          <i className="fa fa-search-plus"></i>
                        </a>
                      </div>
                      <a className="btn btn-default btn-block" data-toggle="modal" data-target="#project-6">Project Title</a>
                    </div>
                    {/* Modal */}
                    <div className="modal fade" id="project-6" tabIndex="-1" role="dialog" aria-labelledby="project-6-label" aria-hidden="true">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="project-6-label">Project Title</h4>
                          </div>
                          <div className="modal-body">

                            <div className="row">
                              <div className="col-md-12">
                                <img src={port6} alt="" />
                                <br />
                                <h3>Project Description</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt.</p>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal end */}
                  </div>

                  <div className="col-sm-6 col-md-3 isotope-item mobile-apps">
                    <div className="image-box">
                      <div className="overlay-container">
                        <img src={port7} alt="" />
                        <a className="overlay" data-toggle="modal" data-target="#project-7">
                          <i className="fa fa-search-plus"></i>
                          <span>Site Building</span>
                        </a>
                      </div>
                      <a className="btn btn-default btn-block" data-toggle="modal" data-target="#project-7">Project Title</a>
                    </div>
                    {/* Modal */}
                    <div className="modal fade" id="project-7" tabIndex="-1" role="dialog" aria-labelledby="project-7-label" aria-hidden="true">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="project-7-label">Project Title</h4>
                          </div>
                          <div className="modal-body">

                            <div className="row">
                              <div className="col-md-12">
                                <img src={port7} alt="" />
                                <br />
                                <h3>Project Description</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt.</p>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal end */}
                  </div>

                  <div className="col-sm-6 col-md-3 isotope-item web-design">
                    <div className="image-box">
                      <div className="overlay-container">
                        <img src={port8} alt="" />
                        <a className="overlay" data-toggle="modal" data-target="#project-8">
                          <i className="fa fa-search-plus"></i>
                        </a>
                      </div>
                      <a className="btn btn-default btn-block" data-toggle="modal" data-target="#project-8">Project Title</a>
                    </div>
                    {/* Modal */}
                    <div className="modal fade" id="project-8" tabIndex="-1" role="dialog" aria-labelledby="project-8-label" aria-hidden="true">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="project-8-label">Project Title</h4>
                          </div>
                          <div className="modal-body">

                            <div className="row">
                              <div className="col-md-12">
                                <img src={port8} alt="" />
                                <br />
                                <h3>Project Description</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt.</p>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal end */}
                  </div>

                  <div className="col-sm-6 col-md-3 isotope-item web-design">
                    <div className="image-box">
                      <div className="overlay-container">
                        <img src={port9} alt="" />
                        <a className="overlay" data-toggle="modal" data-target="#project-9">
                          <i className="fa fa-search-plus"></i>
                        </a>
                      </div>
                      <a className="btn btn-default btn-block" data-toggle="modal" data-target="#project-9">Project Title</a>
                    </div>
                    {/* Modal */}
                    <div className="modal fade" id="project-9" tabIndex="-1" role="dialog" aria-labelledby="project-9-label" aria-hidden="true">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="project-9-label">Project Title</h4>
                          </div>
                          <div className="modal-body">

                            <div className="row">
                              <div className="col-md-12">
                                <img src={port9} alt="" />
                                <br />
                                <h3>Project Description</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt.</p>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal end */}
                  </div>

                  <div className="col-sm-6 col-md-3 isotope-item mobile-apps">
                    <div className="image-box">
                      <div className="overlay-container">
                        <img src={port10} alt="" />
                        <a className="overlay" data-toggle="modal" data-target="#project-10">
                          <i className="fa fa-search-plus"></i>
                        </a>
                      </div>
                      <a className="btn btn-default btn-block" data-toggle="modal" data-target="#project-10">Project Title</a>
                    </div>
                    {/* Modal */}
                    <div className="modal fade" id="project-10" tabIndex="-1" role="dialog" aria-labelledby="project-10-label" aria-hidden="true">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="project-10-label">Project Title</h4>
                          </div>
                          <div className="modal-body">

                            <div className="row">
                              <div className="col-md-12">
                                <img src={port10} alt="" />
                                <br />
                                <h3>Project Description</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt.</p>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal end */}
                  </div>

                  <div className="col-sm-6 col-md-3 isotope-item web-design">
                    <div className="image-box">
                      <div className="overlay-container">
                        <img src={port11} alt="" />
                        <a className="overlay" data-toggle="modal" data-target="#project-11">
                          <i className="fa fa-search-plus"></i>
                        </a>
                      </div>
                      <a className="btn btn-default btn-block" data-toggle="modal" data-target="#project-11">Project Title</a>
                    </div>
                    {/* Modal */}
                    <div className="modal fade" id="project-11" tabIndex="-1" role="dialog" aria-labelledby="project-11-label" aria-hidden="true">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="project-11-label">Project Title</h4>
                          </div>
                          <div className="modal-body">

                            <div className="row">
                              <div className="col-md-12">
                                <img src={port11} alt="" />
                                <br />
                                <h3>Project Description</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt.</p>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal end */}
                  </div>

                  <div className="col-sm-6 col-md-3 isotope-item app-development">
                    <div className="image-box">
                      <div className="overlay-container">
                        <img src={port12} alt="" />
                        <a className="overlay" data-toggle="modal" data-target="#project-12">
                          <i className="fa fa-search-plus"></i>
                        </a>
                      </div>
                      <a className="btn btn-default btn-block" data-toggle="modal" data-target="#project-12">Project Title</a>
                    </div>
                    {/* Modal */}
                    <div className="modal fade" id="project-12" tabIndex="-1" role="dialog" aria-labelledby="project-12-label" aria-hidden="true">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="project-12-label">Project Title</h4>
                          </div>
                          <div className="modal-body">

                            <div className="row">
                              <div className="col-md-12">
                                <img src={port12} alt="" />
                                <br />
                                <h3>Project Description</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt.</p>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal end */}
                  </div>

                </div>
                {/* portfolio items end */}

              </div>
            </div>
          </div>
        </section>
        {/* section end */}
       
            </Fragment>
        );
    }
}

export default Trabalhos;