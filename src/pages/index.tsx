import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import GraphAPI from '@/service/graphQL'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({themeoptions,homepagedata}:any) {
    const homedata = homepagedata.pageBy.homepage;
  return (
    <>
      <Header themeoptions={themeoptions}/>
      <section className="hero-banner">
        <div className="container">
            <div className="row justify-content-md-between justify-content-center align-items-center">
                <div className="col-md-10" data-aos="fade" data-aos-delay="50">
                    <h1>
                        <span className="overflow-hidden d-inline-block">
                            <span className="anim-gsap-1 d-inline-block">{homedata.textLine1}</span>
                        </span> 
                        <span className="overflow-hidden d-inline-block title-one pb-1">
                            <span className="overflow-hidden text-ani-one">{homedata.textLine2}</span> 
                        </span>
                        <span className="overflow-hidden d-inline-block">
                            <span className="anim-gsap-2 d-inline-block">{homedata.textLine3}</span>
                        </span> 
                        <span className="overflow-hidden d-inline-block">
                            <span className="anim-gsap-3 d-inline-block">{homedata.textLine4}</span>
                        </span>
                        <span className="overflow-hidden d-block">
                            <span className="anim-gsap-4 d-inline-block">
                                <strong><span id="changingword">{homedata.textLine5}</span></strong>
                            </span>
                        </span>
                    </h1>
                </div>
            </div>
        </div>
      </section>
      <section>
        <div className="container">
            <div className="row">
                <div className="col-xl-9 col-lg-8">
                    <div className="who-we-info secondary-light-bg">
                        <h2 data-aos="fade-up">Who we are</h2>
                        <h3 data-aos="fade-up">A full-service global digital commerce agency for progressive brands</h3>
                        <p data-aos="fade-up">Since 2003, we are unlearning, relearning, and integrating the art of commerce. With industry-defining commerce capabilities across planning, designing, development, deployment, and marketing we aim to provide peerless and personalized digital commerce solutions. </p>
                        <p data-aos="fade-up">We are known for our expertise and experience in catering to the leading B2B, B2C, and D2C brands worldwide.</p>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4">
                    <div className="who-we-img wrapper-gsap" data-aos="fade" data-aos-delay="50">
                        <img src="assets/images/img1.webp" alt=""/>
                        <div className="cover"></div>
                        <div className="counters p-xl-4 p-md-3 p-2" id="counter">
                            <div className="counter-info">
                                <div className="number"><span className="counter-value" data-count="15">0</span>+</div>
                                <div className="counter-name">Industries Served</div>
                            </div>
                            <div className="counter-info">
                                <div className="number"><span className="counter-value" data-count="12">0</span>+</div>
                                <div className="counter-name">Yrs of Experience</div>
                            </div>
                            <div className="counter-info">
                                <div className="number"><span className="counter-value" data-count="200">0</span>+</div>
                                <div className="counter-name">Global Team</div>
                            </div>
                            <div className="counter-info">
                                <div className="number"><span className="counter-value" data-count="550">0</span>+</div>
                                <div className="counter-name">Storefronts Launched</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      {/* <section className="section-space pt-0">
        <div className="container">
            <div className="row d-none d-md-block">
                <div className="col-12">
                    <hr className="m-0"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 blog-outer-line mt-4 mt-md-0">
                    <div className="blog-block">
                        <div className="img-tag wrapper-gsap">
                            <img src="assets/images/blog1.webp" alt=""/>
                            <div className="cover"></div>
                        </div>
                        <div className="info">
                            <div className="post">Web Development</div>
                            <a title="FD Forex Platform" href="#"><h3>FD Forex Platform</h3></a>
                            <p>Lavorg war superschnell und hatte sogar eine zusätzliche Lösung parat, obwohl die Aufgabe eigentlich schon erledigt war. Tolle Unterstützung, ich würde immer wieder mit Lavorg zusammenarbeiten.</p>
                            <div className="pt-2 mt-auto">
                                <a className="viewLink" href="#">Ream more</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 blog-outer-line mt-4 mt-md-0">
                    <div className="blog-block">
                        <div className="img-tag wrapper-gsap">
                            <img src="assets/images/blog2.webp" alt=""/>
                            <div className="cover"></div>
                        </div>
                        <div className="info">
                            <div className="post">Web Development</div>
                            <a title="Adobe Firefly: Early Access Release" href="#"><h3>Adobe Firefly: Early Access Release</h3></a>
                            <p>Lavorg war superschnell und hatte sogar eine zusätzliche Lösung parat, obwohl die Aufgabe eigentlich schon erledigt war</p>
                            <div className="pt-2 mt-auto">
                                <a className="viewLink" href="#">Ream more</a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      </section> */}

            
      <Footer themeoptions={themeoptions}/>
    </>
  )
}


export async function getStaticProps() {
    const themeOptions = await GraphAPI.themeOptions();
    const homepagedata = await GraphAPI.homePage();
    return {
        props: {
            themeoptions: themeOptions.data.data,
            homepagedata: homepagedata.data.data
        }
    }
  }