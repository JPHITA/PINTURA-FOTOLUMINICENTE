import "./../assets/css/Pricing.css";

export const Pricing = () => {
    return (
        <>
            <section id="pricing" className="pricing">
                <div className="container" data-aos="fade-up">

                    {/* <div className="section-title">
                        <h2>Precio</h2>
                        <p></p>
                    </div> */}

                    <div className="row justify-content-center">

                        <div className="col-lg-4 col-md-6" data-aos="zoom-im" data-aos-delay="300">
                            <div className="box">
                                <h3>PRECIO</h3>
                                <h4><sup>$</sup>702k<span> / Galon</span></h4>
                                <ul>
                                    <li>IVA incluido</li>
                                    <li>Secado Rápido</li>
                                    <li>Larga Duración de Brillo</li>
                                    <li>Disponible en blanco y amarillo</li>
                                    <li>Excelente adherencia y estabilidad</li>
                                    <li>Alta Resistencia a la abrasión e interperie</li>
                                </ul>
                                <div className="btn-wrap">
                                    <a href="#contact" className="btn-buy">Cotiza ahora</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}