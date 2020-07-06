import React, { Component } from "react";

class SlideShow extends Component {
    render() {
        return (
            <section className="site-section" id="section-gallery">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={3} />
                    </ol>
                    <div className="carousel-inner" style={{height: '500px !important'}}>
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="images/teppan.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/steak_resize.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/fire_resize.jpg" alt="Third slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/hall.jpg" alt="Fourth slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </section>

        )
    }
}

export default SlideShow