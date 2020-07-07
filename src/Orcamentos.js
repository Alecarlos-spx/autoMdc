import React, { Fragment, Component } from 'react';

class Orcamentos extends Component {
    constructor (props){
        super(props);
    }

    render(){
        return(
            <Fragment>
       <section  className="price-table secPadding">
          <div  className="container text-center">
            <div id="price" className="heading">
              <h1  className="text-center title">Our Price</h1>
              <div className="separator"></div>
              <p   className="lead text-center">Lorem ipsum dolor sit amet laudantium molestias similique.<br /> Quisquam incidunt ut laboriosam.</p>
              <br />
            </div>
            <div className="row">
              <div className="col-sm-3">
                <div className="panel panel-default text-center">
                  <div className="panel-heading">
                    <h3>Basic</h3>
                  </div>
                  <div className="panel-body">
                    <h3 className="panel-title price">$9<span className="price-cents">99</span><span className="price-month">mo.</span></h3>
                  </div>
                  <ul className="list-group">
                    <li className="list-group-item">5 Projects</li>
                    <li className="list-group-item">5 GB of Storage</li>
                    <li className="list-group-item">Up to 100 Users</li>
                    <li className="list-group-item">10 GB Bandwidth</li>
                    <li className="list-group-item">Security Suite</li>
                    <li className="list-group-item"><a className="btn btn-default">Sign Up Now!</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="panel panel-default text-center">
                  <div className="panel-heading">
                    <h3>Plus</h3>
                  </div>
                  <div className="panel-body">
                    <h3 className="panel-title price">$19<span className="price-cents">99</span><span className="price-month">mo.</span></h3>
                  </div>
                  <ul className="list-group">
                    <li className="list-group-item">10 Projects</li>
                    <li className="list-group-item">10 GB of Storage</li>
                    <li className="list-group-item">Up to 250 Users</li>
                    <li className="list-group-item">25 GB Bandwidth</li>
                    <li className="list-group-item">Security Suite</li>
                    <li className="list-group-item"><a className="btn btn-default">Sign Up Now!</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="panel panel-danger text-center">
                  <div className="panel-heading">
                    <h3>Premium</h3>
                  </div>
                  <div className="panel-body">
                    <h3 className="panel-title price">$29<span className="price-cents">99</span><span className="price-month">mo.</span></h3>
                  </div>
                  <ul className="list-group">
                    <li className="list-group-item">Unlimited</li>
                    <li className="list-group-item">50 GB of Storage</li>
                    <li className="list-group-item">Up to 1000 Users</li>
                    <li className="list-group-item">100 GB Bandwidth</li>
                    <li className="list-group-item">Security Suite</li>
                    <li className="list-group-item"><a className="btn btn-primary">Sign Up Now!</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="panel panel-default text-center">
                  <div className="panel-heading">
                    <h3>Ultimate</h3>
                  </div>
                  <div className="panel-body">
                    <h3 className="panel-title price">$49<span className="price-cents">99</span><span className="price-month">mo.</span></h3>
                  </div>
                  <ul className="list-group">
                    <li className="list-group-item">Unlimited</li>
                    <li className="list-group-item">150 GB of Storage</li>
                    <li className="list-group-item">Unlimited</li>
                    <li className="list-group-item">500 GB Bandwidth</li>
                    <li className="list-group-item">Security Suite</li>
                    <li className="list-group-item"><a className="btn btn-default">Sign Up Now!</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>
            </Fragment>
        );
    }
}

export default Orcamentos;