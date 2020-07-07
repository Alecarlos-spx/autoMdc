import React, { Component, Fragment } from 'react';

class servicos extends Component {
  constructor (props){
    super(props);

  }

    render() {
        return(
        <Fragment>
         {/* <Fade timeout={6000} in={true}>*/}

        {/* section start */}
        <section className="section transprant-bg pclear secPadding">
        
          <div className="container no-view" data-animation-effect="fadeIn">

            <h1 id="services" className="title text-center">What we offer</h1>
            <div className="space"></div>

            <div className="row">
              <div className="col-sm-4">
                <div className="box box-services">
                  <div className="icon"><i className="fa fa-car"></i></div>
                  <h4 className="heading">Car Repairs</h4>
                  <p>Fifth abundantly made Give sixth hath. Cattle creature i be don't them.</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="box box-services">
                  <div className="icon"><i className="fa fa fa-history"></i></div>
                  <h4 className="heading">Print</h4>
                  <p>Advantage old had otherwise sincerity dependent additions. It in adapted natural.</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="box box-services">
                  <div className="icon"><i className="fa fa-thumbs-o-up"></i></div>
                  <h4 className="heading">Servicing</h4>
                  <p>Am terminated it excellence invitation projection as. She graceful shy. </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="box box-services">
                  <div className="icon"><i className="fa fa-recycle"></i></div>
                  <h4 className="heading">Consulting</h4>
                  <p>Fifth abundantly made Give sixth hath. Cattle creature i be don't them.</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="box box-services">
                  <div className="icon"><i className="fa fa-cubes"></i></div>
                  <h4 className="heading">Painting</h4>
                  <p>Advantage old had otherwise sincerity dependent additions. It in adapted natural.</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="box box-services">
                  <div className="icon"><i className="fa fa-users"></i></div>
                  <h4 className="heading">Re-designing</h4>
                  <p>Am terminated it excellence invitation projection as. She graceful shy. </p>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* section end */}
        {/*</Fade>*/}
        </Fragment>
    );
    }

}
export default servicos;
