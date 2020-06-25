import React, { Component } from "react";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark site_navbar bg-dark site-navbar-light" id="site-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Restaurant TEN</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#site-nav" aria-controls="site-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu" />
                    </button>
                    <div className="collapse navbar-collapse" id="site-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a href="#section-home" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="#section-about" className="nav-link">About</a></li>
                            <li className="nav-item"><a href="#section-gallery" className="nav-link">Gallery</a></li>
                            <li className="nav-item"><a href="#section-contact" className="nav-link">Contact</a></li>
                            <li className="nav-item"><div className="nav-link dropdown show">
                                <a className="dropdown-toggle menudrop" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Menu
  </a>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" target="_blank" href="pdf/menu_2020_fr.pdf">Menu Français</a>
                                    <a className="dropdown-item" target="_blank" href="pdf/menu_2020_en.pdf">English Menu</a>
                                    <a className="dropdown-item" target="_blank" href="pdf/drink_2020.pdf">Drink Menu</a>
                                    <a className="dropdown-item" target="_blank" href="pdf/wine_2020.pdf">Wine Menu</a>
                                </div>
                            </div></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;