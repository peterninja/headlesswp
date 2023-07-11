import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import GraphAPI from '@/service/graphQL'

export default function blog({themeoptions,blogPage,blogListing}:any) {
    console.log(blogPage.pageBy.blog);
    const blogBannerData = blogPage.pageBy.blog;
    const blogData = blogListing.posts.nodes;
    // console.log(blogListing.posts);
    return(
        <>
        <Header themeoptions={themeoptions}/>
        <section className="hero-banner sub-banner pb-5">
        <div className="container">
            <div className="row justify-content-md-between justify-content-center align-items-center">
                <div className="col-md-10" data-aos="fade" data-aos-delay="50">
                    {blogBannerData.blogHeading &&(
                        <div className="page-heading">{blogBannerData.blogHeading}</div>
                    )}
                    <h1>
                        {blogBannerData.blogTextline1 &&(
                          <span className="overflow-hidden d-inline-block">
                            <span className="anim-gsap-1 d-inline-block">{blogBannerData.blogTextline1}</span>
                          </span>  
                        )}
                        {blogBannerData.blogTextline2 &&(
                            <span className="overflow-hidden d-inline-block">
                                <span className="anim-gsap-2 d-inline-block">{blogBannerData.blogTextline2}</span>
                            </span> 
                        )}
                    </h1>
                </div>
                <div className="col-md-4">
                    <div className="hero-img">
                        <img src="assets/images/hero-shape.svg" alt="img"/>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section className="section-space light-bg">
            <div className="container mix-box-filter">
                <div className="row justify-content-between mb-lg-5 mb-4 mix-filter">
                    {/* <div className="col-lg-8">
                        <ul>
                            <li><a href="javascript:void(0)" className="filter" data-filter="all">All</a></li>
                            <li><a href="javascript:void(0)" className="filter" data-filter=".marketing">Marketing</a></li>
                            <li><a href="javascript:void(0)" className="filter" data-filter=".business-tips">Business Tips</a></li>
                            <li><a href="javascript:void(0)" className="filter" data-filter=".technology">Technology</a></li>
                        </ul>
                    </div> */}
                    {/* <div className="col-xxl-2 col-lg-3 mt-3 mt-lg-0 order-lg-0 order-2">
                        <select className="form-control sorting-control">
                            <option value="">Sort by</option>
                            <option value="">Sort by 1</option>
                            <option value="">Sort by 2</option>
                            <option value="">Sort by 3</option>
                            <option value="">Sort by 4</option>
                            <option value="">Sort by 5</option>
                        </select>
                    </div> */}
                    <div className="col-12 order-lg-0 order-1 d-sm-block d-none">
                        <hr className="m-0"/>
                    </div>
                </div>
                <div className="row">
                {blogData.map((blogsingle:any,index:any) => {
                    console.log(blogsingle);
                        const categories = blogsingle.categories.nodes;
                        return (
                                blogData.index == 1 ? (
                                    <div className="col-lg-8 col-md-6 mb-3 mb-md-4 mix technology">
                                    <div className="blog-block mw-100 sm-blog">
                                        <div className="img-tag">
                                            <img src="assets/images/blog1.webp" alt=""/>
                                        </div>
                                        <div className="info">
                                            <div className="post">Web Development</div>
                                            <a title="How to add Google authentication to your Next.js + Live app with NextAuth.js" href="#"><h3>How to add Google authentication to your Next.js + Live app with NextAuth.js</h3></a>
                                            <p>Learn how to use NextAuth.js to integrate Google authentication with your Next.js + Liveblocks application—enabling personalization with users' names, photos, and more throughout your product.implementing Single Sign-On improves security by allowing users to bypass entering their password repeatedly.</p>
                                            <div className="pt-2 mt-auto">
                                                <a className="viewLink" href="#">Ream more</a>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                ) : (
                                    <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mix marketing business-tips">
                                        <div className="blog-block sm-blog">
                                            <div className="img-tag">
                                                <img src={blogsingle.featuredImage.node.mediaItemUrl} alt=""/>
                                            </div>
                                            <div className="info">
                                                {categories.map((categorySingle:any, index:any) => {
                                                    return(
                                                        <div className="post" key={index}>{categorySingle.name}
                                                        </div>
                                                    );
                                                })}
                                                <a title={blogsingle.title} href={blogsingle.link}><h3>{blogsingle.title}</h3></a>
                                                <p dangerouslySetInnerHTML={{__html:blogsingle.content}} />
                                                <div className="pt-2 mt-auto">
                                                    <a className="viewLink" href={blogsingle.link}>Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                        })}
                    {/* <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mix business-tips">
                        <div className="blog-block sm-blog">
                            <div className="img-tag">
                                <img src="assets/images/blog4.webp" alt=""/>
                            </div>
                            <div className="info">
                                <div className="post">Java</div>
                                <a href="#"><h3>The Top 10 FP&A Tools of 2023: A Guide</h3></a>
                                <p>Lavorg war superschnell und hatte sogar eine zusätzliche Lösung parat, obwohl.</p>
                                <div className="pt-2 mt-auto">
                                    <a className="viewLink" href="#">Ream more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mix technology">
                        <div className="blog-block sm-blog">
                            <div className="img-tag">
                                <img src="assets/images/blog5.webp" alt=""/>
                            </div>
                            <div className="info">
                                <div className="post">React</div>
                                <a title="" href="#"><h3>FD Forex Platform</h3></a>
                                <p>Lavorg war superschnell und hatte sogar eine zusätzliche Lösung parat, obwohl die Aufgabe eigentlich schon erledigt war.</p>
                                <div className="pt-2 mt-auto">
                                    <a className="viewLink" href="#">Ream more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mix marketing business-tips">
                        <div className="blog-block sm-blog">
                            <div className="img-tag">
                                <img src="assets/images/blog6.webp" alt=""/>
                            </div>
                            <div className="info">
                                <div className="post">Python</div>
                                <a title="" href="#"><h3>Announcing our Causal & Plus Partnership</h3></a>
                                <p>Lavorg war superschnell und hatte sogar eine zusätzliche Lösung parat,</p>
                                <div className="pt-2 mt-auto">
                                    <a className="viewLink" href="#">Ream more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mix business-tips">
                        <div className="blog-block sm-blog">
                            <div className="img-tag">
                                <img src="assets/images/blog7.webp" alt=""/>
                            </div>
                            <div className="info">
                                <div className="post">Marketing</div>
                                <a title="" href="#"><h3>DevOps Challenges</h3></a>
                                <p>Lavorg war superschnell und hatte sogar eine zusätzliche Lösung parat, obwohl die Aufgabe eigentlich schon erledigt war.</p>
                                <div className="pt-2 mt-auto">
                                    <a className="viewLink" href="#">Ream more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mix technology">
                        <div className="blog-block sm-blog">
                            <div className="img-tag">
                                <img src="assets/images/blog8.webp" alt=""/>
                            </div>
                            <div className="info">
                                <div className="post">Finance</div>
                                <a title="" href="#"><h3>Improving React Interaction by 4x</h3></a>
                                <p>Lavorg war superschnell und hatte sogar eine zusätzliche Lösung parat, obwohl die Aufgabe eigentlich schon erledigt war.</p>
                                <div className="pt-2 mt-auto">
                                    <a className="viewLink" href="#">Ream more</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mix technology">
                        <div className="blog-block sm-blog">
                            <div className="img-tag">
                                <img src="assets/images/blog9.webp" alt=""/>
                            </div>
                            <div className="info">
                                <div className="post">Web Development</div>
                                <a title="" href="#"><h3>You just can't calculate LTV in a spreadsheet</h3></a>
                                <p>Lavorg war superschnell und hatte sogar eine zusätzliche.</p>
                                <div className="pt-2 mt-auto">
                                    <a className="viewLink" href="#">Ream more</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mix technology">
                        <div className="blog-block sm-blog">
                            <div className="img-tag">
                                <img src="assets/images/blog10.webp" alt=""/>
                            </div>
                            <div className="info">
                                <div className="post">Java</div>
                                <a title="" href="#"><h3>The Top 10 FP&A Tools of 2023: A Guide</h3></a>
                                <p>Lavorg war superschnell und hatte sogar eine zusätzliche Lösung parat, obwohl.</p>
                                <div className="pt-2 mt-auto">
                                    <a className="viewLink" href="#">Ream more</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mix marketing business-tips">
                        <div className="blog-block sm-blog">
                            <div className="img-tag">
                                <img src="assets/images/blog11.webp" alt=""/>
                            </div>
                            <div className="info">
                                <div className="post">React</div>
                                <a title="" href="#"><h3>FD Forex Platform</h3></a>
                                <p>Lavorg war superschnell und hatte sogar eine zusätzliche Lösung parat, obwohl die Aufgabe eigentlich schon erledigt war.</p>
                                <div className="pt-2 mt-auto">
                                    <a className="viewLink" href="#">Ream more</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mix technology">
                        <div className="blog-block sm-blog">
                            <div className="img-tag">
                                <img src="assets/images/blog12.webp" alt=""/>
                            </div>
                            <div className="info">
                                <div className="post">Python</div>
                                <a title="" href="#"><h3>Announcing our Causal & Plus Partnership</h3></a>
                                <p>Lavorg war superschnell und hatte sogar eine zusätzliche Lösung parat,</p>
                                <div className="pt-2 mt-auto">
                                    <a className="viewLink" href="#">Ream more</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mix marketing">
                        <div className="blog-block sm-blog">
                            <div className="img-tag">
                                <img src="assets/images/blog13.webp" alt=""/>
                            </div>
                            <div className="info">
                                <div className="post">Marketing</div>
                                <a title="" href="#"><h3>DevOps Challenges</h3></a>
                                <p>Lavorg war superschnell und hatte sogar eine zusätzliche Lösung parat, obwohl die Aufgabe eigentlich schon erledigt war.</p>
                                <div className="pt-2 mt-auto">
                                    <a className="viewLink" href="#">Ream more</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mix marketing business-tips">
                        <div className="blog-block sm-blog">
                            <div className="img-tag">
                                <img src="assets/images/blog14.webp" alt=""/>
                            </div>
                            <div className="info">
                                <div className="post">Finance</div>
                                <a title="" href="#"><h3>Improving React Interaction by 4x</h3></a>
                                <p>Lavorg war superschnell und hatte sogar eine zusätzliche Lösung parat, obwohl die Aufgabe eigentlich schon erledigt war.</p>
                                <div className="pt-2 mt-auto">
                                    <a className="viewLink" href="#">Ream more</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mix technology">
                        <div className="blog-block sm-blog">
                            <div className="img-tag">
                                <img src="assets/images/blog15.webp" alt=""/>
                            </div>
                            <div className="info">
                                <div className="post">Web Development</div>
                                <a title="" href="#"><h3>You just can't calculate LTV in a spreadsheet</h3></a>
                                <p>Lavorg war superschnell und hatte sogar eine zusätzliche.</p>
                                <div className="pt-2 mt-auto">
                                    <a className="viewLink" href="#">Ream more</a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* <div className="row mt-5">
                    <div className="col-12">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center mb-0">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">Previous</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link current" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">Next </span>
                                </a>
                            </li>
                            </ul>
                        </nav>
                    </div>
                </div> */}
            </div>
        </section>
        
        <Footer themeoptions={themeoptions}/>
        </>
    )
}
export async function getStaticProps() {
    const themeOptions = await GraphAPI.themeOptions();
    const blogPage = await GraphAPI.blogPage();
    const blogListing = await GraphAPI.blogListing();
    return {
        props: {
            themeoptions: themeOptions.data.data,
            blogPage: blogPage.data.data,
            blogListing: blogListing.data.data
        }
    }
}
