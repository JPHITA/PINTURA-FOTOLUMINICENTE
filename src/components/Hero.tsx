import "./../assets/css/Hero.css";

export const Hero = () => {
    return (
        <>
            <section id="hero" className="d-flex align-items-center">
                <div className="container position-relative" data-aos="fade-up">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-9 text-center">
                            <h1>PINTURA FOTOLUMINISCENTE</h1>
                            <h2>La solución creativa y responsable a la falta de iluminación</h2>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="#about" className="btn-get-started scrollto">Comencemos</a>
                    </div>

                    <div className="row icon-boxes">
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in">
                            <div className="icon-box">
                                <div className="icon"><i className="ri-lightbulb-line"></i></div>
                                <h4 className="title"><a href="" onClick={e => e.preventDefault()}>Tecnología Fotoluminiscente</a></h4>
                                <p className="description">
                                    Usamos pigmentos que almacenan energía lumínica durante el día y la emiten en la oscuridad
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in">
                            <div className="icon-box">
                                <div className="icon"><i className="ri-car-washing-line"></i></div>
                                <h4 className="title"><a href="" onClick={e => e.preventDefault()}>Mejora de la Seguridad Vial</a></h4>
                                <p className="description">
                                    Aumenta la visibilidad en carreteras con iluminación deficiente, reduciendo el riesgo de accidentes
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in">
                            <div className="icon-box">
                                <div className="icon"><i className="ri-leaf-line"></i></div>
                                <h4 className="title"><a href="" onClick={e => e.preventDefault()}>Sostenibilidad Medioambiental</a></h4>
                                <p className="description">
                                    Es una solución más sostenible, reduciendo el uso de fuentes de energia contaminantes
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in">
                            <div className="icon-box">
                                <div className="icon"><i className="ri-community-line"></i></div>
                                <h4 className="title"><a href="" onClick={e => e.preventDefault()}>Inclusion Rural y Urbana</a></h4>
                                <p className="description">
                                    Mejora las condiciones de tránsito en zonas rurales y urbanas, adaptándose a diversas condiciones viales
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}