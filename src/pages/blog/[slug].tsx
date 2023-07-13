import { useRouter } from "next/router";
import GraphAPI from "@/service/graphQL";
import { useEffect } from "react";


function BlogDetails() {
    return (
      <h3>Blog Detail</h3>
    );
  }
  export default BlogDetails;

  export async function getStaticPaths() {
    const blogPosts = await GraphAPI.blogPostListing();
    const paths = blogPosts.data.data.posts.edges.map((item) => {
      const params = { slug: item.node.slug };
      return { params };
    });
    return { paths, fallback: true };
  }
  
