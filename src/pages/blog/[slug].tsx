import { useRouter } from "next/router";
import GraphAPI from "@/service/graphQL";
import React, { useEffect, useState } from "react";


function BlogDetails() {
    return (
      <h3>Blog Detail</h3>
    );
  }
  export default BlogDetails;

  // export async function getStaticPaths() {
  //   const blogPosts = await GraphAPI.blogListing();
  //   const paths = blogPosts.data.data.posts.nodes.map((item:any,index:any) => {
  //     const params = { slug: item.slug };
  //     return { params };
  //   });
  //   return { paths, fallback: true };
  // }