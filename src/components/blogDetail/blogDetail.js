function blogDetail({blogDetail}){
    console.log(blogDetail);
    const date = new Date(blogDetail.date);
    // console.log(date);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return(
        <div>
            <section className="hero-banner sub-banner pb-5">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-10 text-center" data-aos="fade" data-aos-delay="50">
                        <h1>
                            <span className="overflow-hidden d-inline-block">
                                <span className="anim-gsap-1 d-inline-block">{blogDetail.title} </span>
                            </span>
                           
                        </h1>
                    </div>

                    {/* <div className="col-md-4">
                        <div className="hero-img">
                            <img src="assets/images/hero-shape.svg" alt="img"/>
                        </div>
                    </div> */}
                </div>

                <div className="row mt-3 mt-sm-4 pt-xxl-2">
                    <div className="col-12 d-flex justify-content-center flex-wrap">
                        {/* <div className="blog-info-list">
                            <span className="post-by-title">Written by</span>
                            <span className="post-title-dd">
                                <span className="user me-2"><img src="assets/images/team4.webp" alt="img"/></span>
                                <span>James Camron</span>
                            </span>
                        </div> */}
                        <div className="blog-info-list">
                            <span className="post-by-title">Publish date</span>
                            <span className="post-title-dd">
                                <span>{formattedDate}</span>
                            </span>
                        </div>
                        {/* <div className="blog-info-list">
                            <span className="post-by-title">Share on</span>
                            <div className="post-title-dd">
                                <div className="social-here">
                                    <ul>
                                        <li><a target="_blank" title="facebook" href="#"><i className="fa-brands fa-square-facebook"></i></a></li>
                                        <li><a target="_blank" title="twitter" href="#"><i className="fa-brands fa-square-twitter"></i></a></li>
                                        <li><a target="_blank" title="linkedin" href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                                        <li><a target="_blank" title="instagram" href="#"><i className="fa-brands fa-square-whatsapp"></i></a></li>
                                        <li><a target="_blank" title="pinterest" href="#"><i className="fa-brands fa-square-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            </section>

            <section className="pb-5">
                <div className="container">
                    <div className="row mb-lg-5 mb-4">
                        <div className="col-12">
                            <div className="blog-post-img wrapper-gsap">
                                <img src={blogDetail.featuredImage.node.sourceUrl} alt=""/>
                                {/* <div className="cover"></div> */}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-9 col-lg-8 blog-detail-info">
                            <div dangerouslySetInnerHTML={{__html:blogDetail.content}}></div>
                            <div className="mb-lg-5 mb-4">
                                <img src="assets/images/blog-detail1.webp" alt=""/>
                            </div>
                            <h3>Managing multiple projects</h3>
                            <p>Previously, you had access to two API keys: test for development, and live for production. We noticed that some of you had to create multiple accounts to reproduce their more complex development structure.</p>

                            {/* <div className="post-connect-block mb-4 mb-xl-5">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-md-7 mb-3 mb-md-0">
                                        <h3>
                                            Have a <strong>Custom Software Development</strong> challenge to address?
                                        </h3>
                                    </div>
                                    <div className="col-md-5 col-lg-4 text-md-end">
                                        <a className="btn px-xl-5" href="#">Let’s Discuss</a>
                                    </div>
                                </div>
                            </div> */}

                            <p>You can use separate projects for your different applications or domains. For example, if you have three environments for your Acme application, you can replicate it by creating three different Liveblocks projects:</p>

                            <ol>
                                <li>Project <strong>Acme Dev</strong> (Development environment type),</li>
                                <li>Project <strong>Acme Staging</strong> (Development environment type)</li>
                                <li>Project <strong>Acme</strong> (Production environment type)</li>
                            </ol>

                            {/* <div className="info-tag">
                                <p><strong>Why not use React Profiler?</strong> Another way to see which components are rendered is to record a <a href="#">trace in React Profiler</a>. However, when you have a lot of rerenders, matching that trace with the DevTools Performance trace is hard – and if you make a mistake, you’ll end up optimizing the wrong rerenders.</p>
                            </div> */}

                            <h3>Managing multiple projects</h3>
                            <p>Previously, you had access to two API keys: test for development, and live for production. We noticed that some of you had to create multiple accounts to reproduce their more complex development structure.</p>
                            <p>Luckily, this is an issue of the past! You can now create multiple projects from the dashboard, name them as you please, and associate them with the appropriate environment: Development or Production. Of course, each project has its own unique set of secret and public keys.</p>
                        </div>

                        {/* <div className="col-xl-3 col-lg-4 mt-3 mt-lg-0">
                            <div className="border p-3">
                                <h4>Suggested Post</h4>
                                <ul className="suggested-post">
                                    <li>
                                        <a href="#">
                                            <span className="icon"><img src="assets/images/blog1.webp" alt=""/></span>
                                            <span className="info">
                                                <span className="tag">Security</span>
                                                <span>How prevent from agura wifi virus</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon"><img src="assets/images/blog4.webp" alt=""/></span>
                                            <span className="info">
                                                <span className="tag">Marketing</span>
                                                <span>The Top 10 FP&A Tools of 2023: A Guide</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon"><img src="assets/images/blog5.webp" alt=""/></span>
                                            <span className="info">
                                                <span className="tag">Finance</span>
                                                <span>You just can't calculate LTV in a spreadsheet</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon"><img src="assets/images/blog6.webp" alt=""/></span>
                                            <span className="info">
                                                <span className="tag">Security</span>
                                                <span>How to add Google authentication to your</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon"><img src="assets/images/blog7.webp" alt=""/></span>
                                            <span className="info">
                                                <span className="tag">Announcement</span>
                                                <span>Announcing our Causal & Plus Partnership</span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>

                    {/* <div className="row ">
                        <div className="col-12">
                            <hr className="mb-0"/>
                        </div>
                    </div> */}

                    {/* <div className="row align-items-center justify-content-between mt-md-5 mt-4">
                        <div className="col-xl-5 col-md-7">
                            <h3>Have a <strong>Custom Software Development</strong> challenge to address?</h3>
                        </div>
                        <div className="col-md-4 text-md-end">
                            <a className="btn primary-btn" href="#">Let’s Discuss</a>
                        </div>
                    </div> */}
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
                        <div className="col-md-6 blog-outer-line mt-md-0">
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
        </div>
    )
}
export default blogDetail;