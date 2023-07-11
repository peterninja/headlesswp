const baseURL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
import { useEffect, useState } from 'react';
import Link from 'next/link';
import router from 'next/router';

function Footer({themeoptions}:any) {

   const [menus,setMenu] = useState([]);
   const [menus_footer,setFooterMenu] = useState([]);
   const [menus_footer_technology,setFooterTechnology] = useState([]);
   const [menus_services,setFooterServices] = useState([]);
    useEffect(() => {
        fetch('https://dev-headlesswp.pantheonsite.io/wp-json/menu/footer_company')
        .then((response) => response.json())
        .then((json) =>{
            setMenu(json);
        })
    },[]);
     useEffect(() => {
        fetch('https://dev-headlesswp.pantheonsite.io/wp-json/menu/footer_hire_developer_team')
        .then((response) => response.json())
        .then((json) =>{
            setFooterMenu(json);
        })
     },[]);
     useEffect(() => {
        fetch('https://dev-headlesswp.pantheonsite.io/wp-json/menu/footer_technology_expertise')
        .then((response) => response.json())
        .then((json) =>{
            setFooterTechnology(json);
        })
     },[]);
     useEffect(() => {
        fetch('https://dev-headlesswp.pantheonsite.io/wp-json/menu/footer_services')
        .then((response) => response.json())
        .then((json) =>{
            setFooterServices(json);
        })
     },[]);
     const data = themeoptions.themeOptionSettings.themeOptions;
     return(
        <>
        <footer>
        <div className="container">
            <div className="row align-items-end position-relative mb-md-5 mb-4">
                <div className="col-lg-7 col-md-6 mb-3 mb-md-0">
                    <div className="info">
                        <h2>
                            {data.footerTextLine1 &&(
                                <span className="overflow-hidden d-inline-block">
                                    <span className="footer-title-ani d-block"><strong>{data.footerTextLine1}</strong></span>
                                </span>
                            )}
                            {data.footerTextLine2 &&(
                                <span className="overflow-hidden d-block">
                                    <span className="footer-title-ani d-block">{data.footerTextLine2}</span>
                                </span>
                            )}
                        </h2>
                    </div>
                </div>
                {data.email &&(
                    <div className="col-lg-5 col-md-6 text-md-end" data-aos="fade">
                        <a className="email-cont" href={`mailto:` + data.email}>{data.email}
                        </a>                    
                    </div>
                )}
            </div>
            <div className="row">
                <div className="col-12">
                    <hr className="m-0"/>
                </div>
            </div>
            <div className="row py-4 py-md-5">
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
                            <div className="h4">Services</div>
                            <div className="footer-link">
                                <ul>
                                {menus_services.map((menus_service: any, index) =>    {
                                    return (
                                        <li className="nav-item" key={menus_service.ID}>
                                            <Link href={menus_service.post_name}>{menus_service.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                                </ul>
                                {/* <span className="view-more mt-2">View more</span> */}
                            </div>
                            <hr className="mb-0 mt-4 d-block d-lg-none"/>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
                            <div className="h4">Hire Developer Team</div>
                            {menus_footer && (
                                <div className="footer-link">
                                    <ul>
                                    {menus_footer.map((menu_footer: any, index) =>    {
                                        return (
                                            <li className="nav-item" key={menu_footer.ID}>
                                                <Link href={menu_footer.post_name}>{menu_footer.title}
                                                </Link>
                                            </li>
                                        );
                                        })}
                                    </ul>
                                    {/* <span className="view-more mt-2">View more</span> */}
                                </div>
                            )}
                            <hr className="mb-0 mt-4 d-block d-lg-none"/>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
                            <div className="h4">Technology Expertise</div>
                            {menus_footer_technology && (
                                <div className="footer-link">
                                    <ul>
                                    {menus_footer_technology.map((menus_footer_technology_single: any, index) =>    {
                                            return (
                                            <li className="nav-item" key={menus_footer_technology_single.ID}>
                                                <Link href={menus_footer_technology_single.post_name}>{menus_footer_technology_single.title}
                                                </Link>
                                            </li>
                                            );
                                            })}
                                    </ul>
                                    {/* <span className="view-more mt-2">View more</span> */}
                                </div>
                            )}
                            <hr className="mb-0 mt-4 d-block d-lg-none"/>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
                            <div className="h4">Company</div>
                            {menus &&(
                                <div className="footer-link">
                                    <ul>
                                        {menus.map((menu: any, index) => {
                                            return (
                                        <li className="nav-item" key={menu.ID}>
                                            <Link href={menu.post_name}>{menu.title}
                                            </Link>
                                        </li>
                                        );
                                        })}
                                    </ul>
                                </div>
                            )}
                            <hr className="mb-0 mt-4 d-block d-lg-none"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mt-4 mt-lg-0">
                    <div className="contact-info h-auto">
                        <div className="h5">{data.addressBoxHeader}</div>
                        <div className="mt-3 info">
                            <ul>
                                {data.address &&(
                                    <li>
                                        <span className="icon"><img src="assets/images/map-white.svg" alt=""/></span>
                                        <span>{data.address}</span>
                                    </li>
                                )}
                                {data.email &&(
                                    <li>
                                        <span className="icon"><img src="assets/images/sent.svg" alt=""/></span>
                                        <span><a href={`mailto:` + data.email}>{data.email}</a></span>
                                    </li>
                                )}
                                {data.phoneNo &&(
                                    <li>
                                        <span className="icon"><img src="assets/images/phone-white.svg" alt=""/></span>
                                        <span><a href={`tel:` + data.phoneNo}>{data.phoneNo}</a></span>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="social-here mt-4">
                            <ul>
                                <li><a target="_blank" title="facebook" href="#"><i className="fa-brands fa-square-facebook"></i></a></li>
                                <li><a target="_blank" title="twitter" href="#"><i className="fa-brands fa-square-twitter"></i></a></li>
                                <li><a target="_blank" title="linkedin" href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                                <li><a target="_blank" title="instagram" href="#"><i className="fa-brands fa-square-whatsapp"></i></a></li>
                                <li><a target="_blank" title="pinterest" href="#"><i className="fa-brands fa-square-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {data.copyrightText && (
                <div className="row pb-4 pb-md-5">
                    <div className="col-12">
                        <div className="copyright"><p>{data.copyrightText}</p></div>
                    </div>
                </div>
            )}
        </div>
    </footer>
        </>
    )
}
export default Footer;