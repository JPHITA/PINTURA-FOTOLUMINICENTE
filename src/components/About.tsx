

export const About = () => {

    return (
        <>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>SOBRE EL PROYECTO</h2>
                        <p>Nuestro objetivo es implementar una alternativa de iluminacion en las vias de Antioquia</p>
                    </div>

                    <div className="row content">
                        <div className="col-lg-6">
                            <p>
                            Somos un equipo de ingenieros comprometidos con la innovación y la sostenibilidad,
                            le apostamos al desarrollo y producción de soluciones de pintura fotoluminiscente 
                            con el fin de ofrecer un producto de alta calidad que contribuya a mejorar la seguridad vial y
                            reducir el consumo energético
                            </p>
                            {/* <ul>
                                <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                                <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                            </ul> */}
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <p>
                                Nos destacamos por nuestra capacidad de innovación y adaptación a las necesidades del mercado,
                                ofreciendo soluciones personalizadas para cada proyecto. 
                                Nuestra visión es ser líderes en la industria de pinturas fotoluminiscentes,
                                marcando la diferencia en la seguridad y eficiencia energética.
                            </p>
                            {/* <a href="#" className="btn-learn-more">Learn More</a> */}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};