import React, { Fragment, Component } from 'react';

import Servicos from './Servicos';
import Sobre from './Sobre';
import Trabalhos from './Trabalhos';
import Testemunhos from './Testemunhos';
import Orcamentos from './Orcamentos';
import fundo from './images/banner.jpg';



var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { fundo } + ")"
};

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <Fragment>

     {/* scrollToTop */}


     <div className="scrollToTop"><i className="icon-up-open-big"></i></div>

     {/* header start */}
     <header className="header fixed clearfix navbar navbar-fixed-top">
       <div className="container">
         <div className="row">
           <div className="col-md-4">

             {/* header-left start */}
             <div className="header-left">
               {/* name-and-slogan */}
               <div className="logo-section smooth-scroll">
                 <div className="brand"><a href="#banner"><b>MDC</b> Auto Mecânica</a></div>
               </div>
             </div>
             {/* header-left end */}

           </div>
           <div className="col-md-8">

             {/* header-right start */}
             <div className="header-right">

               {/* main-navigation start */}
               <div className="main-navigation animated">

                 {/* navbar start */}
                 <nav className="navbar navbar-default" role="navigation">
                   <div className="container-fluid">

                     {/* Toggle get grouped for better mobile display */}
                     <div className="navbar-header">
                       <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
                         <span className="sr-only">Toggle navigation</span>
                         <span className="icon-bar"></span>
                         <span className="icon-bar"></span>
                         <span className="icon-bar"></span>
                       </button>
                     </div>

                     {/* Collect the nav links, forms, and other content for toggling */}
                     <div className="collapse navbar-collapse scrollspy smooth-scroll" id="navbar-collapse-1">
                       <ul className="nav navbar-nav navbar-right">
                         <li className="active"><a href="#banner">Home</a></li>
                         

                         <li><a href="#services">Nossos Serviços</a></li>
                         <li><a href="#about">Sobre Nós</a></li>

                         <li><a href="#portfolio">Nosso Trabalho</a></li>
                         <li><a href="#price">Orçamentos</a></li>
                         <li><a href="#contact">Contato</a></li>
                       </ul>
                     </div>

                   </div>
                 </nav>
                 {/* navbar end */}

               </div>
               {/* main-navigation end */}

             </div>
             {/* header-right end */}

           </div>
         </div>
       </div>
     </header>
     {/* header end */}


     {/* banner start */}




     <div id="banner" className="banner">
       <div className="banner-image" style={{ position: 'relative', zIndex: '0', background: 'none' }}>
         <img src={fundo} />
       </div>
     
    

     
           {/*<div id="banner" className="banner">
             <div className="banner-image" ></div>*/}

             <div className="banner-caption scrollspy smooth-scroll" >
               <div style= {{marginTop: '0px', opacity: '1' }} className="animated object-visible fadeIn"  data-animation-effect="fadeIn" >
                       <h1>Somos uma oficina </h1>
                       <h3 className="padding-top30">Com os melhores serviços e equipamentos.</h3>
                     <div className="padding-top60 contact-form">
                         <button className="btn cta-button">Comprove</button>
                     </div>
                       <a id="" href="#services"><i className="fa fa-angle-down"></i></a>
               </div>
             </div>  
           </div>     
           
         {/* banner end */}
         <section className="hero-caption secPadding">

           <div className="container">

             <div className="row " style={{ marginTop: '0px' }}>
               <div className="col-sm-12">
                 <h2>Bem Vindo <strong>a</strong> - <span>Nossa casa</span> MDC Auto Mecânica</h2>
                 <p>Entre com seu carro e fazemos a mágica acontecer</p>
               </div>
             </div>
           </div>
         </section>

            <Servicos />

            <Sobre />

            {/* section start */}
            <div className="default-bg colord secPadding">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <h1 className="text-center">Amazing Free Bootstrap Template.</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* section end */}

            <Trabalhos />


            <Testemunhos />



            <Orcamentos />


            {/* footer start */}
            <footer id="footer">

              {/* .footer start */}
              <div className="footer section">
                <div className="container">
                  <h1 className="title text-center" id="contact">Contact Us</h1>
                  <div className="space"></div>
                  <div className="row">

                    <div className="col-sm-6">
                      <div className="footer-content">
                        <form role="form" id="footer-form">
                          <div className="form-group has-feedback">
                            <label className="sr-only" htmlFor="name2">Name</label>
                            <input type="text" className="form-control" id="name2" placeholder="Name" name="name2" required />
                            <i className="fa fa-user form-control-feedback"></i>
                          </div>
                          <div className="form-group has-feedback">
                            <label className="sr-only" htmlFor="email2">Email address</label>
                            <input type="email" className="form-control" id="email2" placeholder="Enter email" name="email2" required />
                            <i className="fa fa-envelope form-control-feedback"></i>
                          </div>
                          <div className="form-group has-feedback">
                            <label className="sr-only" htmlFor="message2">Message</label>
                            <textarea className="form-control" rows="8" id="message2" placeholder="Message" name="message2" required></textarea>
                            <i className="fa fa-pencil form-control-feedback"></i>
                          </div>
                          <input type="submit" value="Send" className="btn btn-default" />
                        </form>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="footer-content">


                        <div className="widget-content">

                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel nam magnam natus tempora cumque, aliquam deleniti voluptatibus voluptas. Maecenas ultrices finibus erat sit amet auctor. Curabitur et metus laoreet, fermentum quam sagittis, cursus augue. </p><br />

                          <p className="contacts"><i className="fa fa-map-marker"></i> 1508 Kembery Drive, Chicago, IL 60605 </p>

                          <p className="contacts"><i className="fa fa-phone"></i> 202-314-1583</p>

                          <p className="contacts"><i className="fa fa-envelope"></i> support@biss.com</p>



                        </div>

                        <div>
                          <ul className="social-links">
                            <li className="facebook"><a target="_blank" href="#"><i className="fa fa-facebook"></i></a></li>
                            <li className="twitter"><a target="_blank" href="#"><i className="fa fa-twitter"></i></a></li>
                            <li className="googleplus"><a target="_blank" href="#"><i className="fa fa-google-plus"></i></a></li>
                            <li className="skype"><a target="_blank" href="#"><i className="fa fa-skype"></i></a></li>
                            <li className="linkedin"><a target="_blank" href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li className="youtube"><a target="_blank" href="#"><i className="fa fa-youtube"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* .footer end */}

                {/* .subfooter start */}
                <div className="subfooter">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <p className="text-center">Copyright © 2016. All Rights Reserved. <a href="https://webthemez.com/tag/free" target="_blank">Free HTML Templates</a> by WebThemez.com </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* .subfooter end */}
              </div>
            </footer>
            {/* footer end */}


      </Fragment>
    );
  }

}
export default Main;
