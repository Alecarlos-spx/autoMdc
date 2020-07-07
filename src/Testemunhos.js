import React, { Component, Fragment } from 'react';

class Testemunhos extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        {/* section start */}
        <section className="default-bg secPadding">
          <div className="container">
            <div className="row">
              <div className='col-md-offset-2 col-md-8 text-center'>
                <h2>Testimonials</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-offset-2 col-md-8'>
                <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                  {/* Bottom Carousel Indicators */}
                  <ol className="carousel-indicators">
                    <li data-target="#quote-carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#quote-carousel" data-slide-to="1"></li>
                    <li data-target="#quote-carousel" data-slide-to="2"></li>
                  </ol>

                  {/* Carousel Slides / Quotes */}
                  <div className="carousel-inner">

                    {/* Quote 1 */}
                    <div className="item active">
                      <blockquote>
                        <div className="row">
                          <div className="col-sm-3 text-center">
                            <img className="img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg" style={{ width: '100px', height: '100px' }} />
                          </div>
                          <div className="col-sm-9">
                            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit!</p>
                            <small>Someone famous</small>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    {/* Quote 2 */}
                    <div className="item">
                      <blockquote>
                        <div className="row">
                          <div className="col-sm-3 text-center">
                            <img className="img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/mijustin/128.jpg" style={{ width: '100px', height: '100px' }} />
                          </div>
                          <div className="col-sm-9">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor nec lacus ut tempor. Mauris.</p>
                            <small>Someone famous</small>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    {/* Quote 3 */}
                    <div className="item">
                      <blockquote>
                        <div className="row">
                          <div className="col-sm-3 text-center">
                            <img className="img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/keizgoesboom/128.jpg" style={{ width: '100px', height: '100px' }} />
                          </div>
                          <div className="col-sm-9">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum elit in arcu blandit, eget pretium nisl accumsan. Sed ultricies commodo tortor, eu pretium mauris.</p>
                            <small>Someone famous</small>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section end */}
      </Fragment>
    );
  }
}

export default Testemunhos;