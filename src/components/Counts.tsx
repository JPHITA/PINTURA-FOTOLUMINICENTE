// @ts-expect-error Missing type declaration for external library
import PureCounter from "@srexi/purecounterjs";
import { useEffect } from "react";

import "./../assets/css/Counts.css";
import counts_data from "./../assets/data/counts.json";

interface Count{
    start: number;
    end: number;
    percentaje: boolean;
    description: string;
}

export const Counts = () => {

    useEffect(() => { new PureCounter({decimals: 0}); }, []);

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