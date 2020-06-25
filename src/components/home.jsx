import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <section className="site-cover" style={{ backgroundImage: 'url(images/front.jpg)' }} id="section-home">
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center site-vh-100">
                        <div className="col-md-12">
                            <h1 className="site-heading site-animate mb-3 text-secondary text-main-font">RESTAURANT TEN</h1>
                            <h2 className="h5 site-subheading mb-5 site-animate">Come and eat well with our delicious &amp; healthy foods.</h2>
                            <p><a href="#section-about" className="btn btn-outline-white btn-lg text-main-font">Pour Emporter</a></p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;