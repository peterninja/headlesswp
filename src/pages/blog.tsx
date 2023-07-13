import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import GraphAPI from '@/service/graphQL'
import React, { useEffect, useState } from "react";

export default function Blog({themeoptions,blogPage,blogListing,blogFilter}:any) {
    console.log(blogFilter);
    const blogBannerData = blogPage.pageBy.blog;
    const blogData = blogListing.posts.nodes;
    const [keyword, setKeyword] = useState(null);
    const [filterBlogs, setFilterBlogs] = useState<any>(null);
    console.log("dddss",filterBlogs);
    const handleclick = async (event:any) => {
        // console.log(event.target.text);
        const elms = event.target.text;
        event.preventDefault();
            const filterBlog = (await GraphAPI.blogFilter(elms)).data.data;
            console.log("test: ",filterBlog);
            const catFilter = filterBlog.posts.edges;
            setFilterBlogs(catFilter);
      };
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
                        <div className="col-lg-8">
                            <ul>
                                <li><a href="#" className="filter" data-filter="all">All</a></li>
                                <li><a href="#" onClick={handleclick} className="filter" data-filter=".marketing">Finance</a></li>
                                <li><a href="#" onClick={handleclick} className="filter" data-filter=".business-tips">Java</a></li>
                                <li><a href="#" onClick={handleclick} className="filter" data-filter=".technology">Python</a></li>
                                <li><a href="#" onClick={handleclick} className="filter" data-filter=".technology">React</a></li>
                            </ul>
                        </div>
                        <div className="col-12 order-lg-0 order-1 d-sm-block d-none">
                            <hr className="m-0"/>
                        </div>
                    </div>
                    <div className="row">
                        {blogData.map((blogsingle:any,index:any) => {
                            console.log(blogsingle);
                                const categories = blogsingle.categories.nodes;
                                return (
                                        <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mix marketing business-tips" key={index}>
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
                                                    <div dangerouslySetInnerHTML={{__html:blogsingle.content}} />
                                                    <div className="pt-2 mt-auto">
                                                        <a className="viewLink" href={blogsingle.link}>Read more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        )
                            })}
                    </div>
                        {filterBlogs &&(
                            <div>
                            {filterBlogs.map((item:any, index:any) => {
                                const assignedcategories = item.node.terms.nodes;
                                return(
                                <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mix marketing business-tips" key={index}>
                                    <div className="blog-block sm-blog">
                                        <div className="img-tag">
                                            <img src={item.node.featuredImage.node.mediaItemUrl} alt=""/>
                                        </div>
                                        {assignedcategories &&(
                                            <div className="info">
                                            {assignedcategories.map((singlecat:any, index:any) => {
                                                return(
                                                        <div className="post" key={index}>{singlecat.name}</div>
                                                    )
                                                })}
                                                <a title={item.node.title} href="#"><h3>{item.node.title}</h3></a>
                                                <div dangerouslySetInnerHTML={{__html:item.node.content}} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                )
                            })}
                            </div>
                        )}
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
    const blogFilter = await GraphAPI.blogFilter("s");
    return {
        props: {
            themeoptions: themeOptions.data.data,
            blogPage: blogPage.data.data,
            blogListing: blogListing.data.data,
            blogFilter: blogFilter.data.data
        }
    }
}