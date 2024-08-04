import team_1 from "./../assets/img/team/team-1.jpg"
import team_2 from "./../assets/img/team/team-2.jpg"
import team_3 from "./../assets/img/team/team-3.jpg"
import team_4 from "./../assets/img/team/team-4.jpg"

interface TeamMember {
    nombre: string;
    carrera: string;
    img: string;
}

export const Team = () => {

    const team: TeamMember[] = [
        {
            nombre: "Mariana Barrios Molina",
            carrera: "Ingenieria Administrativa",
            img: team_1
        },
        {
            nombre: "Stiwar Albeiro Cataño",
            carrera: "Ingenieria Ambiental",
            img: team_2
        },
        {
            nombre: "María Fernanda Julio",
            carrera: "Ingenieria Quimica",
            img: team_3
        },
        {
            nombre: "Andrea Henao Arroyave",
            carrera: "Ingenieria Administrativa",
            img: team_4
        },
        {
            nombre: "José Luis Martínez",
            carrera: "Ingenieria Civil",
            img: team_1
        },
        {
            nombre: "Juan Nicolás Piedrahíta",
            carrera: "Ingenieria de Sistemas e Informatica", 
            img: team_2
        },
        {
            nombre: "Sara Restrepo Ocampo",
            carrera: "Ingenieria Administrativa",
            img: team_3
        },
        {
            nombre: "Daniela Sanchez Patiño",
            carrera: "Ingenieria Administrativa",
            img: team_4
        }
    ]

    return (
        <>
            <section id="team" className="team section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Equipo</h2>
                        <p>Universidad Nacional de Colombia - sede Medellin</p><br />
                        <p>Proyecto integrado de ingenieria 2024-1 Grupo 4 <b>Equipo 1</b></p>
                    </div>

                    <div className="row">
                        {
                            team.map((member, i) => (
                                <div key={i} className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={(i+1)*150}>
                                    <div className="member">
                                        <div className="member-img">
                                            <img src={member.img} className="img-fluid" alt="" />
                                            <div className="social">
                                                <a href=""><i className="bi bi-twitter"></i></a>
                                                <a href=""><i className="bi bi-facebook"></i></a>
                                                <a href=""><i className="bi bi-instagram"></i></a>
                                                <a href=""><i className="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>{member.nombre}</h4>
                                            <span>{member.carrera}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </section>
        </>
    );
}

{/* <div className="row">

    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
        <div className="member">
            <div className="member-img">
                <img src={team_1} className="img-fluid" alt="" />
                <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
            <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
            </div>
        </div>
    </div>

    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
        <div className="member">
            <div className="member-img">
                <img src={team_2} className="img-fluid" alt="" />
                <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
            <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
            </div>
        </div>
    </div>

    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
        <div className="member">
            <div className="member-img">
                <img src={team_3} className="img-fluid" alt="" />
                <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
            <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
            </div>
        </div>
    </div>

    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
        <div className="member">
            <div className="member-img">
                <img src={team_4} className="img-fluid" alt="" />
                <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
            <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
            </div>
        </div>
    </div>

</div> */}