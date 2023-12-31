import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Header({themeoptions}:any) {
    const [isToggled, setIsToggled] = useState(false);
    const router = useRouter();
    const [Headermenu,setHeaderMenu] = useState([]);
    useEffect(() => {
        fetch('https://dev-headlesswp.pantheonsite.io/wp-json/menu/primary')
        .then((response) => response.json())
        .then((json) =>{
            setHeaderMenu(json);
        })
     },[]);
    const data = themeoptions.themeOptionSettings.themeOptions;
    const handleToggleClick = () => {
        // alert('in');
        setIsToggled(!isToggled);
        const mainNavigation = document.querySelector('.navbar-toggler');
        const NavBar = document.querySelector('.navbar-toggler-icon');
        const Body = document.querySelector('body');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        // const ariaExpand = document.querySelector('aria-expanded');
        if (mainNavigation && NavBar && Body && navbarCollapse) {
          mainNavigation.classList.toggle('active');
          NavBar.classList.toggle('show');
        //   Body.classList.toggle('overflow_body');
          navbarCollapse.classList.toggle('show');
        //   ariaExpand.toggleAttribute('true');
        }
     };
      useEffect(() => {
        const menuToggle = document.querySelector('header .navbar-toggler');
        const NavBarToggle = document.querySelector('.navbar-toggler-icon');
        const BodyToggle = document.querySelector('body');
        const NavBarCollapse = document.querySelector('.navbar-collapse');
        // const ariaExpandToggle = document.querySelector('aria-expanded');
        if (menuToggle && NavBarToggle && BodyToggle && NavBarCollapse) {
        //   menuToggle.addEventListener('click', handleToggleClick);
          NavBarToggle.addEventListener('click', handleToggleClick);
        //   BodyToggle.addEventListener('click', handleToggleClick);
          NavBarCollapse.addEventListener('click', handleToggleClick);
        //   ariaExpandToggle.addEventListener('click', handleToggleClick);
        }       
        return () => {
          if (menuToggle && NavBarToggle && BodyToggle && NavBarCollapse) {
            // menuToggle.removeEventListener('click', handleToggleClick);
            NavBarToggle.removeEventListener('click', handleToggleClick);
            // BodyToggle.removeEventListener('click', handleToggleClick);
            NavBarCollapse.removeEventListener('click', handleToggleClick);
            // ariaExpandToggle.removeEventListener('click', handleToggleClick);
          }
        };
      }, []);
    return(
        <>
        <header>
        <div className="container">
            <nav className="navbar navbar-light">
                {data.mainLogo.mediaItemUrl &&(
                    <a title="Lavorg" data-aos="fade" className="navbar-brand" href="index.html">
                    <img src={data.mainLogo.mediaItemUrl} alt="" />
                    </a>
                )}
                
                <div className="ms-auto top-link">
                    <a title="Become a Partner" className="link me-3 viewLink" href={data.simpleMenuText.url}>{data.simpleMenuText.title}</a>
                    <a title="Contact Us" className="btn primary-btn" href={data.buttonMenu.url}><span className="d-none d-md-block">{data.buttonMenu.title}</span><i className="fa-solid fa-phone d-block d-md-none"></i></a>
                </div>
                <button className="navbar-toggler border-0 ms-3 ms-xl-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <span className="close">Close</span>
                </button>
                <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
                    {Headermenu &&(
                        <ul className="navbar-nav">
                            {Headermenu.map((HeadermenuItem: any, index) => {
                                return (
                                    <li className="nav-item" key={HeadermenuItem.ID}>
                                    <a className="nav-link" href={HeadermenuItem.url}>{HeadermenuItem.title}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                    <div className="info-bar">
                        {data.headerTextLine1 &&(
                            <div className="overflow-hidden">
                                <div className="info-title info-list">{data.headerTextLine1}</div>
                            </div>
                        )}
                        {data.headerEmail &&(
                            <div className="overflow-hidden">
                                <a className="viewLink info-list" href={`mailto:` + data.headerEmail}>{data.headerEmail}
                                </a>
                            </div>
                        )}
                        {data.headerPhone &&(
                            <div className="overflow-hidden">
                                <a className="viewLink info-list" href={`tel:` + data.headerPhone}>
                                    <strong>{data.headerPhone}</strong>
                                </a>
                            </div>
                        )}
                        
                    </div>
                    <div className="menu-content">
                        <div className="menu-tab" id="services-sub">
                            <div className="container-img four-menu">
                                <div className="menu-list">
                                    <a title="Software Development" href="#">
                                        <div className="img-tag">
                                            {/* <Image src="assets/images/menu-services1.webp" alt="" /> */}
                                        </div>
                                        <h4>Software Development</h4>
                                    </a>
                                </div>
                                <div className="menu-list">
                                    <a title="Web Development" href="#">
                                        <div className="img-tag">
                                            {/* <Image src="assets/images/menu-services2.webp" alt="" /> */}
                                        </div>
                                        <h4>Web Development</h4>
                                    </a>
                                </div>
                                <div className="menu-list">
                                    <a title="Mobile Development" href="#">
                                        <div className="img-tag">
                                            {/* <Image src="assets/images/menu-services3.webp" alt="" /> */}
                                        </div>
                                        <h4>Mobile Development</h4>
                                    </a>
                                </div>
                                <div className="menu-list">
                                    <a title="Ecommerce Development" href="#">
                                        <div className="img-tag">
                                            {/* <Image src="assets/images/menu-services4.webp" alt="" /> */}
                                        </div>
                                        <h4>Ecommerce Development</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="menu-tab" id="company-sub">
                            <div className="container-img two-menu">
                                <div className="menu-list">
                                    <a title="About Us" href="#">
                                        <div className="img-tag">
                                            {/* <Image src="assets/images/menu-about.webp" alt="" /> */}
                                        </div>
                                        <h4>About Us</h4>
                                    </a>
                                </div>
                                <div className="menu-list">
                                    <a title="Career" href="#">
                                        <div className="img-tag">
                                            {/* <Image src="assets/images/menu-career.webp" alt="" /> */}
                                        </div>
                                        <h4>Career</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="menu-tab" id="expertise-sub">
                            <div className="container-img two-menu">
                                <div className="menu-list">
                                    <a title="Industry" href="#">
                                        <div className="img-tag">
                                            {/* <Image src="assets/images/industry.webp" alt="" /> */}
                                        </div>
                                        <h4>Industry</h4>
                                    </a>
                                </div>
                                <div className="menu-list">
                                    <a title="Technology" href="#">
                                        <div className="img-tag">
                                            {/* <Image src="assets/images/technology.webp" alt="" /> */}
                                        </div>
                                        <h4>Technology</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>   
        </>
    )
}