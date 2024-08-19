import { useRef, useState } from "react"

import logo from "./../assets/img/Logo2.png";
import "./../assets/css/Header.css";


interface navItem {
    name: string;
    href: string;
    active: boolean;
}

export const Header = () => {

    const navbar = useRef<HTMLElement>(null);
    const mobile_nav_toggle = useRef<HTMLElement>(null);
    // const header = useRef<HTMLElement>(null);

    function handleClick_mobileNavToggle() {
        navbar.current!.classList.toggle('navbar-mobile')
        mobile_nav_toggle.current!.classList.toggle('bi-list')
        mobile_nav_toggle.current!.classList.toggle('bi-x')
    }

    function handle_click_navMobileLink(i?: number) {
        if (navbar.current!.classList.contains('navbar-mobile')) {
            navbar.current!.classList.remove('navbar-mobile')
            mobile_nav_toggle.current!.classList.toggle('bi-list')
            mobile_nav_toggle.current!.classList.toggle('bi-x')
        }

        if (i !== undefined) {
            // set active nav item
            const newnavItems = navItems.map((item, index) => {
                return {
                    ...item,
                    active: index === i ? true : false
                }
            });
            setNavItems(newnavItems);
        }
    }

    const [navItems, setNavItems] = useState<navItem[]>([
        { name: "Home", href: "#hero", active: true },
        { name: "About", href: "#about", active: false },
        { name: "Services", href: "#services", active: false },
        // { name: "Portfolio", href: "#portfolio", active: false },
        { name: "Team", href: "#team", active: false },
        { name: "Pricing", href: "#pricing", active: false },
        { name: "Contact", href: "#contact", active: false }
    ]);

    return (
        <>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">

                    {/* <h1 className="logo"><a href="index.html">OnePage</a></h1> */}
                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                    <a href="#" className="logo">
                        <img src={logo} alt="" className="img-fluid" />
                    </a>

                    <nav id="navbar" className="navbar" ref={navbar}>
                        <ul>
                            {
                                navItems.map((item, i) => {
                                    return (
                                        <li key={i}>
                                            <a
                                                onClick={() => handle_click_navMobileLink(i)}
                                                className={"nav-link scrollto " + (item.active ? "active" : "")}
                                                href={item.href}
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                            <li><a onClick={() => handle_click_navMobileLink()} className="getstarted scrollto" href="#about">Comencemos</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"
                            onClick={handleClick_mobileNavToggle}
                            ref={mobile_nav_toggle}></i>
                    </nav>
                    {/* <!-- .navbar --> */}

                </div>
            </header>
        </>
    )
}

{/* <li><a onClick={handle_click_navMobileLink} className="nav-link scrollto active" href="#hero">Home</a></li>
<li><a onClick={handle_click_navMobileLink} className="nav-link scrollto" href="#about">About</a></li>
<li><a onClick={handle_click_navMobileLink} className="nav-link scrollto" href="#services">Services</a></li>
<li><a onClick={handle_click_navMobileLink} className="nav-link scrollto o" href="#portfolio">Portfolio</a></li>
<li><a onClick={handle_click_navMobileLink} className="nav-link scrollto" href="#team">Team</a></li>
<li><a onClick={handle_click_navMobileLink} className="nav-link scrollto" href="#pricing">Pricing</a></li>
<li><a onClick={handle_click_navMobileLink} className="nav-link scrollto" href="#contact">Contact</a></li> */}

{/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
    <ul>
        <li><a href="#">Drop Down 1</a></li>
        <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
            <ul>
                <li><a href="#">Deep Drop Down 1</a></li>
                <li><a href="#">Deep Drop Down 2</a></li>
                <li><a href="#">Deep Drop Down 3</a></li>
                <li><a href="#">Deep Drop Down 4</a></li>
                <li><a href="#">Deep Drop Down 5</a></li>
            </ul>
        </li>
        <li><a href="#">Drop Down 2</a></li>
        <li><a href="#">Drop Down 3</a></li>
        <li><a href="#">Drop Down 4</a></li>
    </ul>
</li> */}