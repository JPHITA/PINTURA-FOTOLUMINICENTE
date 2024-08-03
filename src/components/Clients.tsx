import client_1 from "./../assets/img/clients/client-1.png"
import client_2 from "./../assets/img/clients/client-2.png"
import client_3 from "./../assets/img/clients/client-3.png"
import client_4 from "./../assets/img/clients/client-4.png"
import client_5 from "./../assets/img/clients/client-5.png"
import client_6 from "./../assets/img/clients/client-6.png"

export const Clients = () => {
    return (
        <>
            <section id="clients" className="clients section-bg">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
                            <img src={client_1} className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
                            <img src={client_2} className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
                            <img src={client_3} className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
                            <img src={client_4} className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
                            <img src={client_5} className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
                            <img src={client_6} className="img-fluid" alt="" />
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}