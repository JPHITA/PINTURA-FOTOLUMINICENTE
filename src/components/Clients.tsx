import "./../assets/css/Clients.css";

import client_1 from "./../assets/img/clients/gobernacion de antioquia.png"
import client_2 from "./../assets/img/clients/invias.png"
import client_3 from "./../assets/img/clients/ANI.png"

export const Clients = () => {
    return (
        <>
            <section id="clients" className="clients section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>NUESTRO PUBLICO OBJETIVO</h2>
                        <p>(A demás de particulares, para su aplicación en vías privadas y parqueaderos)</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center justify-content-center" data-aos="zoom-in">
                            <img src={client_1} className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center justify-content-center" data-aos="zoom-in">
                            <img src={client_2} className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center justify-content-center" data-aos="zoom-in">
                            <img src={client_3} className="img-fluid" alt="" />
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}