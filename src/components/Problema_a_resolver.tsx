// @ts-expect-error Missing type declaration for external library
import PureCounter from "@srexi/purecounterjs";
import { useEffect } from "react";

import "./../assets/css/Problema_a_resolver.css";
import counts_data from "../assets/data/counts.json";
import video from "./../assets/video/Video 1.mp4";

interface Count {
    start: number;
    end: number;
    percentaje: boolean;
    description: string;
}

export const Problema_a_resolver = () => {

    useEffect(() => { new PureCounter({ decimals: 0 }); }, []);

    const counts: Count[] = counts_data;

    return (
        <>
            <section id="counts" className="counts">
                <div className="container">

                    <div className="section-title">
                        <h2>QUE PROBLEMA QUEREMOS SOLUCIONAR</h2>
                        <p></p>
                    </div>

                    <div className="row justify-content-center">

                        {
                            counts.map((c, index) => (
                                <div key={index} className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                        <span
                                            className={"purecounter" + (c.percentaje ? " percentaje" : "")}
                                            data-purecounter-start={c.start}
                                            data-purecounter-end={c.end}
                                            data-purecounter-duration="2"
                                        ></span>
                                        <p>{c.description}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                    <div className="row pt-5">

                        <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                            <video
                                className="video-problema"
                                src={video}
                                autoPlay
                                muted
                                controls={false}
                            ></video>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="section-title">
                                {/* <h2>Antigua via al mar</h2> */}
                                <p id="titulo-video-problema">Antigua Via al Mar</p>
                            </div>
                            <ul>
                                <li><i className="ri-arrow-right-double-fill"></i> Muy pobre dotación de luminarias</li>
                                <li><i className="ri-arrow-right-double-fill"></i> Sin demarcaciones horizontales</li>
                                <li><i className="ri-arrow-right-double-fill"></i> Es apenas uno de los tantos ejemplos de vías con falta de iluminación</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
};


{/* <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
    <div className="count-box">
        <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="2" className="purecounter"></span>
        <p>Happy Clients</p>
    </div>
</div>

<div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
    <div className="count-box">
        <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="2" className="purecounter"></span>
        <p>Projects</p>
    </div>
</div>

<div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
    <div className="count-box">
        <span data-purecounter-start="0" data-purecounter-end="30" data-purecounter-duration="2" className="purecounter"></span>
        <p>Years of experience</p>
    </div>
</div>

<div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
    <div className="count-box">
        <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="2" className="purecounter"></span>
        <p>Awards</p>
    </div>
</div> */}