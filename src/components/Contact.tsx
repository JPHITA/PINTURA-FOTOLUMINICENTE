import "./../assets/css/Contact.css";


export const Contact = () => {
    return (
        <>
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Contact</h2>
                        <p></p>
                    </div>

                    <div>
                        <iframe style={{ border: 0, width: '100%', height: '270px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7992864452904!2d-75.41488322595632!3d6.157630727308813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e469e8bec87121f%3A0x68b75156ad037b24!2sZona%20Franca%20de%20Rionegro!5e0!3m2!1ses!2sco!4v1722710782649!5m2!1ses!2sco" frameBorder="0" allowFullScreen></iframe>
                    </div>

                    <div className="row mt-5">

                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Localización:</h4>
                                    <p>Zona franca de Rio Negro</p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>info@example.com</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Telefono:</h4>
                                    <p>+57 300 0000 000</p>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-8 mt-5 mt-lg-0">

                            <form action="#" method="post" role="form" className="php-email-form">
                                <div className="row gy-2 gx-md-3">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                    <div className="form-group col-12">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group col-12">
                                        <textarea className="form-control" name="message" rows={5} placeholder="Message" required></textarea>
                                    </div>
                                    <div className="my-3 col-12">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center col-12"><button type="submit">Send Message</button></div>
                                </div>
                            </form>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}