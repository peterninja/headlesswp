import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import GraphAPI from '@/service/graphQL'

function about({themeoptions}:any) {
    return(
        <>
        <Header themeoptions={themeoptions}/>

        <section className="hero-banner sub-banner">
        <div className="container">
            <div className="row justify-content-md-between justify-content-center align-items-center">
                <div className="col-md-8" data-aos="fade" data-aos-delay="50">
                    <div className="page-heading">About Us</div>
                    <h1>
                        <span className="overflow-hidden d-inline-block">
                            <span className="anim-gsap-1 d-inline-block">We are people making</span>
                        </span>
                        <span className="overflow-hidden d-inline-block">
                            <span className="anim-gsap-2 d-inline-block">products for</span>
                        </span> 
                        <span className="overflow-hidden d-inline-block title-one p-1">
                            <span className="overflow-hidden text-ani-one">people.</span> 
                        </span>
                        <span className="overflow-hidden d-inline-block">
                            <span className="anim-gsap-3 d-inline-block"><strong>Best In className</strong></span>
                        </span>
                    </h1>
                </div>
                <div className="col-md-4">
                    <div className="hero-img">
                        <img src="assets/images/hero-shape.svg" alt="img" />
                    </div>
                </div>
            </div>
        </div>
        <div className="top-content mt-3 mt-xl-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>We’re a diverse group of designers, strategists, engineers and wordsmiths who make things people love to use. We help the world’s most progressive brands solve problems, seize opportunities and generate growth.</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
        
        <section className="standout white-content section-space">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-lg-6">
                    <h2>We’re standout experts in the business</h2>
                </div>
            </div>
            <div className="row mt-3 mt-lg-5">
                <div className="col-12">
                    <div className="standout-info" id="counter">
                        <div className="counter-info">
                            <div className="number"><span className="counter-value" data-count="25"></span>k</div>
                            <div className="counter-name">Project <br/>Completed</div>
                        </div>
                        <div className="counter-info">
                            <div className="number"><span className="counter-value" data-count="8"></span>k</div>
                            <div className="counter-name">Happy <br/>Customers</div>
                        </div>
                        <div className="counter-info">
                            <div className="number"><span className="counter-value" data-count="15"></span></div>
                            <div className="counter-name">Years <br/>Experiences</div>
                        </div>
                        <div className="counter-info">
                            <div className="number"><span className="counter-value" data-count="98"></span></div>
                            <div className="counter-name">Awards <br/>Achievement</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

        <section className="section-space white-content primary-bg culture-design">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 pe-xl-5">
                        <h2>Culture,<br/>
                            design Craft & <br/>
                            Technical Excellence</h2>
                    </div>
                    <div className="col-md-6">
                        <p>Everything starts with a need. Our products are designed to meet those needs by understanding customers, creating business value and utilising the best technology. We also bring a cultural sensitivity to our work, by understanding each product’s unique place in the world.</p>
                        <ul>
                            <li>4 Hubs, One Team</li>
                            <li>16+ Hour Timezone Coverage</li>
                            <li>Remote First, Distributed Teams</li>
                            <li>16 Office Employees and Still Counting</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-space pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Dedicated to delivering excellence</h2>
                        <p>Everyone has a story. Here is ours.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-lg-4 mt-3 mt-md-4">
                        <div className="dedicated-block">
                            <div className="img-tag wrapper-gsap">
                                <img src="assets/images/dedicated-img1.webp" alt=""/>
                                <div className="cover"></div>
                            </div>
                            <div className="info">
                                <h4>The Begining</h4>
                                <p>The Lavorg journey began in 1995 when two college friends, John Salivan and Kris Klopperman got together and started selling computers and engineering calculators.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-3 mt-md-4">
                        <div className="dedicated-block">
                            <div className="img-tag wrapper-gsap">
                                <img src="assets/images/dedicated-img2.webp" alt=""/>
                                <div className="cover"></div>
                            </div>
                            <div className="info">
                                <h4>Mission</h4>
                                <p>At Lavorg, we’re on a mission to bring together the personal service of local IT providers with the power of a national network. We believe that’s simpler than it sounds.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-3 mt-md-4">
                        <div className="dedicated-block">
                            <div className="img-tag wrapper-gsap">
                                <img src="assets/images/dedicated-img3.webp" alt=""/>
                                <div className="cover"></div>
                            </div>
                            <div className="info">
                                <h4>We are global</h4>
                                <p>Our national network allows us to offer best-in-className services like dedicated vCIOs, specialized security and compliance advisory services, a 24/7 help desk, and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-space">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 pe-xl-5">
                        <h2 data-aos="fade">Trusted by</h2>
                    </div>

                    <div className="col-lg-8">
                        <p >Since 2003, we are unlearning, relearning, and integrating the art of commerce. With industry-defining commerce capabilities across planning, designing, development</p>

                        <div className="trusted-by">
                            <ul>
                                <li data-aos="fade" data-aos-delay="600"><img src="assets/images/gea.svg" alt=""/></li>
                                <li data-aos="fade" data-aos-delay="800"><img src="assets/images/nestle.svg" alt=""/></li>
                                <li data-aos="fade" data-aos-delay="1000"><img src="assets/images/national-geographic.svg" alt=""/></li>
                                <li data-aos="fade" data-aos-delay="1200"><img src="assets/images/gea.svg" alt=""/></li>
                                <li data-aos="fade" data-aos-delay="1400"><img src="assets/images/kotak.svg" alt=""/></li>
                                <li data-aos="fade" data-aos-delay="1600"><img src="assets/images/nyse.svg" alt=""/></li>
                                <li data-aos="fade" data-aos-delay="1800"><img src="assets/images/gea.svg" alt=""/></li>
                                <li data-aos="fade" data-aos-delay="2000"><img src="assets/images/kotak.svg" alt=""/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-space pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 pe-xl-5">
                        <h2 data-aos="fade">Our Leadership</h2>
                    </div>
                    <div className="col-lg-8">
                        <p >Since 2003, we are unlearning, relearning, and integrating the art of commerce. With industry-defining commerce capabilities across planning, designing, development</p>
                        <div className="row g-3 g-xl-4 g-xxl-5">
                            <div className="col-md-4 col-6">
                                <div className="team-block">
                                    <div className="img-tag mb-2 mb-xl-3 wrapper-gsap">
                                        <img src="assets/images/team1.webp" alt=""/>
                                        <div className="cover"></div>
                                    </div>
                                    <span className="name">Bessie Cooper</span>
                                    <span className="authority">CEO</span>
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="team-block">
                                    <div className="img-tag mb-2 mb-xl-3 wrapper-gsap">
                                        <img src="assets/images/team2.webp" alt=""/>
                                        <div className="cover"></div>
                                    </div>
                                    <span className="name">Darlene Robertson</span>
                                    <span className="authority">CTO</span>
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="team-block">
                                    <div className="img-tag mb-2 mb-xl-3 wrapper-gsap">
                                        <img src="assets/images/team3.webp" alt=""/>
                                        <div className="cover"></div>
                                    </div>
                                    <span className="name">Courtney Henry</span>
                                    <span className="authority">Marketing Head</span>
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="team-block">
                                    <div className="img-tag mb-2 mb-xl-3 wrapper-gsap">
                                        <img src="assets/images/team4.webp" alt=""/>
                                        <div className="cover"></div>
                                    </div>
                                    <span className="name">Bessie Cooper</span>
                                    <span className="authority">Architect</span>
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="team-block">
                                    <div className="img-tag mb-2 mb-xl-3 wrapper-gsap">
                                        <img src="assets/images/team5.webp" alt=""/>
                                        <div className="cover"></div>
                                    </div>
                                    <span className="name">Manthan Dave</span>
                                    <span className="authority">Director</span>
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="team-block">
                                    <div className="img-tag mb-2 mb-xl-3 wrapper-gsap">
                                        <img src="assets/images/team6.webp" alt=""/>
                                        <div className="cover"></div>
                                    </div>
                                    <span className="name">Zenual Drack</span>
                                    <span className="authority">Sale and Solution Expert</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-space secondary-dark-bg white-content position-relative">
            <div className="our-shape">
                <img src="assets/images/up-shape.svg" alt=""/>
            </div>
            <div className="container position-relative">
                <div className="row mb-lg-5 mb-4">
                    <div className="col-md-7 pe-xl-5">
                        <div className="tag-title mb-2">OUR CORE VALUES</div>
                        <h2>Our culture is built around five key attributes that differentiate us from our competition.</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-6 mt-3">
                        <div className="our-value h-100">
                            <div className="icon mb-md-3 mb-2" data-aos="zoom-in"><img src="assets/images/passionate.svg" alt=""/></div>
                            <h4>Passionate</h4>
                            <p>We are intensely enthusiastic about providing a superior experience.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mt-3">
                        <div className="our-value h-100">
                            <div className="icon mb-md-3 mb-2" data-aos="zoom-in"><img src="assets/images/respectful.svg" alt=""/></div>
                            <h4>Respectful</h4>
                            <p>We are polite and kind to one another, even when it gets tough.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mt-3">
                        <div className="our-value h-100">
                            <div className="icon mb-md-3 mb-2" data-aos="zoom-in"><img src="assets/images/ownership.svg" alt=""/></div>
                            <h4>Ownership</h4>
                            <p>We are empowered to do our jobs and work towards a common goal.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mt-3">
                        <div className="our-value h-100">
                            <div className="icon mb-md-3 mb-2" data-aos="zoom-in"><img src="assets/images/unified.svg" alt=""/></div>
                            <h4>Unified</h4>
                            <p>We work as a team and trust each other to create a seamless experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-space ">
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
        </section>

        <section className="pt-5 light-bg overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 pe-xxl-5 d-flex flex-column">
                        <div className="pe-5">
                            <h3><strong>Partner with Us for<br/> Comprehensive IT</strong></h3>
                            <p><strong>We’re happy to answer any questions you may have and help you determine which of our services best fit your needs.</strong></p>
                        </div>
                        <p>Lavorg proudly has over 20 years of experience serving the IT needs of businesses in a variety of industries. Our experience allows us to understand the specificities of your industry and develop an IT strategy that matches your needs.</p>

                        <div className="what-happen mt-auto">
                            <h4>What happens next?</h4>
                            <div className="d-flex flex-wrap flex-sm-nowrap mt-lg-3">
                                <div className="steps" data-aos="fade">
                                    <span className="numb">1.</span>
                                    <span className="info">
                                        We Schedule a call at your convenience
                                    </span>
                                </div>
                                <div className="steps" data-aos="fade" data-aos-delay="200">
                                    <span className="numb">2.</span>
                                    <span className="info">
                                        We do a discovery and consulting meting
                                    </span>
                                </div>
                                <div className="steps" data-aos="fade" data-aos-delay="400">
                                    <span className="numb">3.</span>
                                    <span className="info">
                                        We prepare a<br/> proposal
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 ps-xl-4 mt-4 mt-lg-0">
                        <div className="schedule-call white-bg border mb-5" data-aos="fade-left">
                            <div className="text-center">
                                <h3>Schedule call</h3>
                            </div>
                            <form className="border-top pt-4">
                                <div className="form-label-group mb-3">
                                    <label>Full Name</label>
                                    <input type="text" className="form-control" id="name" required/>
                                </div>
                                <div className="form-label-group mb-3">
                                    <label>Email</label>
                                    <input type="email" className="form-control" id="email" required/>
                                </div>
                                <div className="form-label-group mb-3">
                                    <label>Phone Number</label>
                                    <input type="text" className="form-control" id="number" required/>
                                </div>
                                <div className="form-label-group mb-3">
                                    <label>Inquiry About</label>
                                    <textarea className="form-control" required></textarea>
                                </div>
                                <div className="mt-xl-5 mt-4">
                                    <button className="btn w-100" type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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
export default about;