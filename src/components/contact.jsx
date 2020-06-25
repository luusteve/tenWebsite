import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <section className="site-section-light" id="section-contact">
                <div className="container">
                    <h2 className="site-sub-title text-primary font-weight-bold mx-auto">Nous sommes situés</h2>
                    <div className="iframe-container">
                        <iframe align="middle" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.053956975227!2d-73.82360928420196!3d45.50899243847401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc93b56a0e789df%3A0x23efeba85ffdca5!2sTen+Restaurant!5e0!3m2!1sen!2sca!4v1458003215146" width={1200} height={600} frameBorder={0} style={{ border: 0 }} allowFullScreen />                
                        </div>
                </div></section >
        )
    }
}

export default Contact