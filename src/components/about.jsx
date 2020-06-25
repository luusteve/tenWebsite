import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <section className="site-section" id="section-about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 site-animate mb-5 mr-auto text-left">
                            <h1 className="site-sub-title display-4 text-primary font-weight-bold">Teppanyaki</h1>
                            <p className="text-black">Situé à l'Ouest de l'Île, la destination ultime pour la cuisine Teppanyaki japonaise</p>

                            <p className="mb-4 text-black">Nos chefs spécialisés de Teppanyaki vous offrirons une expérience inoubliables. Nous n'utilisons que les ingrédients les plus frais, les steaks AAA les plus fins et une panoplie de fruits de mer, tous preparés devant vous.</p>
                            <p className="mb-4 text-black font-weight-bold">Pour emporter commander par téléphone au<br></br> 514-684-9919</p>
                        </div>
                        <div className="col-md-5 site-animate mb-5 ml-auto text-left">
                            <h2 className="site-sub-title display-4 text-primary font-weight-bold">LOCALISATION</h2>
                            <p className="text-black">11655 Boul Gouin O, Pierrefonds, QC H8Y 1Y4 <br></br>T 514-684-9919</p>
                            <h2 className="site-sub-title display-4 text-primary font-weight-bold">HEURES</h2>
                            <p className="text-black"><b>Lundi-Mardi-Mercredi-Jeudi-Vendredi</b><br></br>10h00-14h00<br></br><b>Samedi-Dimanche</b><br></br>16h00-24h00</p>
                            <a href="https://www.facebook.com/tenrestaurantmontreal"><button type="button" onclick="https://www.facebook.com/tenrestaurantmontreal" className="btn btn-fb text-font-button"><i className="fab fa-facebook-f pr-1"></i> Facebook</button>
                            </a></div>
                    </div>
                </div>
            </section >

        )
    }
}

export default About