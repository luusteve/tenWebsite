import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer site-bg-darkblue site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4 site-animate mx-auto text-left">
                                    <p>Restaurant TEN <br></br>11655 Boul Gouin O, Pierrefonds, QC H8Y 1Y4 <br></br>T 514-684-9919</p>
                                </div>
                                <div className="col-md-1" />
                                <div className="col-md-3 site-animate mx-auto">
                                    <div className="site-footer-widget mb-4">
                                        <ul class="site-footer-social list-unstyled ">
                                            <li class="site-animate"><a href="https://www.facebook.com/tenrestaurantmontreal" target="_blank"><span class="icon-facebook"></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        )
    }
}
export default Footer