import portfolio_1 from "./../assets/img/portfolio/portfolio-1.jpg"
import portfolio_2 from "./../assets/img/portfolio/portfolio-2.jpg"
import portfolio_3 from "./../assets/img/portfolio/portfolio-3.jpg"
import portfolio_4 from "./../assets/img/portfolio/portfolio-4.jpg"
import portfolio_5 from "./../assets/img/portfolio/portfolio-5.jpg"
import portfolio_6 from "./../assets/img/portfolio/portfolio-6.jpg"
import portfolio_7 from "./../assets/img/portfolio/portfolio-7.jpg"
import portfolio_8 from "./../assets/img/portfolio/portfolio-8.jpg"
import portfolio_9 from "./../assets/img/portfolio/portfolio-9.jpg"


export const Portfolio = () => {

    return (
        <>
            <section id="portfolio" className="portfolio">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="150">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-app">App</li>
                                <li data-filter=".filter-card">Card</li>
                                <li data-filter=".filter-web">Web</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="300">

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={portfolio_1} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>App 1</h4>
                                    <p>App</p>
                                    <div className="portfolio-links">
                                        <a href="#" data-gallery="portfolioGallery" className="" title="App 1"><i className="bx bx-plus"></i></a>
                                        <a href="#" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src={portfolio_2} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Web 3</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                        <a href="#" data-gallery="portfolioGallery" className="" title="Web 3"><i className="bx bx-plus"></i></a>
                                        <a href="#" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={portfolio_3} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>App 2</h4>
                                    <p>App</p>
                                    <div className="portfolio-links">
                                        <a href="#" data-gallery="portfolioGallery" className="" title="App 2"><i className="bx bx-plus"></i></a>
                                        <a href="#" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src={portfolio_4} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Card 2</h4>
                                    <p>Card</p>
                                    <div className="portfolio-links">
                                        <a href="#" data-gallery="portfolioGallery" className="" title="Card 2"><i className="bx bx-plus"></i></a>
                                        <a href="#" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src={portfolio_5} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Web 2</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                        <a href="#" data-gallery="portfolioGallery" className="" title="Web 2"><i className="bx bx-plus"></i></a>
                                        <a href="#" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={portfolio_6} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>App 3</h4>
                                    <p>App</p>
                                    <div className="portfolio-links">
                                        <a href="#" data-gallery="portfolioGallery" className="" title="App 3"><i className="bx bx-plus"></i></a>
                                        <a href="#" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src={portfolio_7} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Card 1</h4>
                                    <p>Card</p>
                                    <div className="portfolio-links">
                                        <a href="#" data-gallery="portfolioGallery" className="" title="Card 1"><i className="bx bx-plus"></i></a>
                                        <a href="#" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src={portfolio_8} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Card 3</h4>
                                    <p>Card</p>
                                    <div className="portfolio-links">
                                        <a href="#" data-gallery="portfolioGallery" className="" title="Card 3"><i className="bx bx-plus"></i></a>
                                        <a href="#" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src={portfolio_9} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Web 3</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                        <a href="#" data-gallery="portfolioGallery" className="" title="Web 3"><i className="bx bx-plus"></i></a>
                                        <a href="#" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}