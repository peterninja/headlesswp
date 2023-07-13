import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import GraphAPI from '@/service/graphQL'
import React, { useEffect, useState } from "react";

export default function Blog({themeoptions,blogPage,blogListing,blogFilter,PostCategories,blogSearch}:any) {

        const blogBannerData = blogPage.pageBy.blog;
        // const blogData = blogListing.posts.nodes;
        const allCategories = PostCategories.terms.nodes;
        const [keyword, setKeyword] = useState(null);
        const [searchBlogs, setSearchBlogs] = useState(null);
        const [filterBlogs, setFilterBlogs] = useState<any>(null);
        const [searchFlag, setSearchFlag] = useState<any>(false);
        const [blogData, setBlogData] = useState<any>(blogListing.posts.nodes);
        const handleclick = async (event:any) => {
            event.preventDefault();
            const elms = event.target.text;
            console.log(elms);
            if(elms == "All"){
                const filterBlog = (await GraphAPI.blogListing()).data.data;
                const catFilter = filterBlog.posts.nodes;
                setFilterBlogs(catFilter);
                setBlogData(catFilter);
            }else{
                const filterBlog = (await GraphAPI.blogFilter(elms)).data.data;
                const catFilter = filterBlog.posts.nodes;
                setFilterBlogs(catFilter);
                setBlogData(catFilter);
            }
        };

        const handleInputChange = (event:any) => {
            console.log(event.target.value);
            if (event.target.value !== "") {
              setKeyword(event.target.value);
              setSearchFlag(true);
            } else {
              setSearchFlag(false);
            }
        };

        const handleSearchSubmit = async (event:any) => {
            
            event.preventDefault();
            // const elms = event.target.text;
            // console.log(event.target.value);
            if (searchFlag) {
            const blogSearchk = (await GraphAPI.blogSearch(keyword)).data.data;
            const blogSearchData = blogSearchk.posts.nodes
                setBlogData(blogSearchData);
            } else {
                setBlogData(null);
            }
            // if(elms == "All"){
            //     const filterBlog = (await GraphAPI.blogListing()).data.data;
            //     const catFilter = filterBlog.posts.nodes;
            //     setFilterBlogs(catFilter);
            //     setBlogData(catFilter);
            // }else{
            //     const filterBlog = (await GraphAPI.blogFilter(elms)).data.data;
            //     const catFilter = filterBlog.posts.nodes;
            //     setFilterBlogs(catFilter);
            //     setBlogData(catFilter);
            // }
        };
        // console.log("kk",searchBlogs);
        console.log("blog datasss",blogData);
        console.log("filter data",filterBlogs);
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
                    <div className="row">
                        <div className="col-12 text-center">
                            <form method="post" onSubmit={handleSearchSubmit}>
                                <div className="input_search">
                                    {/* <span>
                                        <img src="../images/search-interface-symbol.svg" alt="search" />
                                    </span> */}
                                    <input type="text" placeholder="Search..." onChange={handleInputChange}/>
                                </div>
                            </form>
                         </div>
                    </div>
                    <div className="row justify-content-between mb-lg-5 mb-4 mix-filter">
                        <div className="col-lg-8">
                            <ul>
                                <li><a href="#" className="filter" onClick={handleclick} data-filter="all">All</a></li>
                                {allCategories.map((term:any,index:any) => {
                                    return(
                                        <li key={index}><a href="#" onClick={handleclick} className="filter" data-filter=".marketing">{term.name}</a></li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="col-12 order-lg-0 order-1 d-sm-block d-none">
                            <hr className="m-0"/>
                        </div>
                    </div>
                    {blogData &&(
                    <div className="row">
                        {blogData.map((blogsingle:any,index:any) => {
                            // console.log(blogsingle);
                                const categories = blogsingle.terms.nodes;
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
                        {/* {filterBlogs &&(
                            <div>
                            {filterBlogs.map((item:any, index:any) => {
                                const assignedcategories = item.terms.nodes;
                                return(
                                <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mix marketing business-tips" key={index}>
                                    <div className="blog-block sm-blog">
                                        <div className="img-tag">
                                            <img src={item.featuredImage.node.mediaItemUrl} alt=""/>
                                        </div>
                                        {assignedcategories &&(
                                            <div className="info">
                                            {assignedcategories.map((singlecat:any, index:any) => {
                                                return(
                                                        <div className="post" key={index}>{singlecat.name}</div>
                                                    )
                                                })}
                                                <a title={item.title} href="#"><h3>{item.title}</h3></a>
                                                <div dangerouslySetInnerHTML={{__html:item.content}} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                )
                            })}
                            </div>
                        )} */}
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
    const blogSearch = await GraphAPI.blogSearch("s");
    // const blogFilter = await GraphAPI.blogFilter("s");
    const PostCategories = await GraphAPI.PostCategories("s");
    return {
        props: {
            themeoptions: themeOptions.data.data,
            blogPage: blogPage.data.data,
            blogListing: blogListing.data.data,
            blogSearch: blogSearch.data.data,
            // blogFilter: blogFilter.data.data,
            PostCategories: PostCategories.data.data
        }
    }
}