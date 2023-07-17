import { useRouter } from "next/router";
import GraphAPI from "@/service/graphQL";
import React, { useEffect, useState } from "react";
import BlogDetail from "../../components/blogDetail/blogDetail";


function BlogDetails({blogDetail}:any) {
  const router = useRouter();
      return (
        <BlogDetail blogDetail={blogDetail} />
      );
  }
  export default BlogDetails;

  export const getStaticPaths = async () => {
    const res = await GraphAPI.blogListing();
    const paths = res.data.data.posts.nodes.map((item:any,index:any) => {
      const params = { slug: item.slug };
      return { params };
    });
    return {
      paths,
      fallback: false
    }
  }

  export const getStaticProps = async ({params}:any) => {
    const blogDetail = await GraphAPI.singlePostSettings({params});
    const blogDetailData = blogDetail.data.data.postBy;
    return {
      props: {
        blogDetail: blogDetailData,
      },
    };
  }