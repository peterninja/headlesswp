import axios from "axios";
const baseURL = "https://dev-headlesswp.pantheonsite.io/graphql";
const headers = {
  "content-type": "application/json",
};
export default class GraphAPI {

  static themeOptions() {
    const themeQuery = `
    query ThemeQuery {
        themeOptionSettings {
        themeOptions {
            mainLogo {
                mediaItemUrl
            }
            buttonMenu {
                title
                url
              }
              simpleMenuText {
                title
                url
              }
            headerTextLine1
            headerPhone
            headerEmail
            address
            addressBoxHeader
            copyrightText
            email
            fieldGroupName
            footerTextLine2
            footerTextLine1
            phoneNo
        }
        }
    }
      `;
    const graphqlQuery = {
      operationName: "ThemeQuery",
      query: themeQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static homePage() {
    const homeQuery = `
    query homeQuery {
      pageBy(pageId: 69) {
        homepage {
          textLine1
          textLine2
          textLine3
          textLine4
          textLine5
          wDescription
          wHeading
          wSubHeading
          counter {
            counterName
            counterNumber
          }
          wImage {
            mediaItemUrl
          }
          iHeading
          topIndustrySlider {
            industryName
          }
          bottomIndustrySlider {
            industryName
          }
        }
      }
    }
        `;
    const graphqlQuery = {
      operationName: "homeQuery",
      query: homeQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static blogListing() {
    const blogListing = `
    query GetPosts {
      posts {
        nodes {
          id
          title
          date
          content
          link
          slug
          terms{
            nodes{
              name
            }
          }
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }`;
    const graphqlQuery = {
      operationName: "GetPosts",
      query: blogListing,
    };
    console.log(axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    }));
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static blogPage() {
    const blogPageQuery = `
    query blogPageQuery {
      pageBy(pageId: 161) {
        blog {
          blogHeading
          blogTextline1
          blogTextline2
        }
      }
    }`;
    const graphqlQuery = {
      operationName: "blogPageQuery",
      query: blogPageQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static blogFilter(keyword:any) {
    const blogFilter = `
    query blogFilter{
      posts(
        where: { categoryName:"${keyword}"}
      ) {
        nodes{
          id
          title
          content
          featuredImage{
            node{
              mediaItemUrl
            }
          }
          terms{
            nodes{
              name
            }
          }
        }
      }
    }`;
    const graphqlQuery = {
      operationName: "blogFilter",
      query: blogFilter,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static blogSearch(keyword:any) {
    const blogSearch = `
    query blogSearch{
      posts(
        where: { search:"${keyword}"}
      ) {
        nodes{
          id
          title
          content
          featuredImage{
            node{
              mediaItemUrl
            }
          }
          terms{
            nodes{
              name
            }
          }
        }
      }
    }`;
    const graphqlQuery = {
      operationName: "blogSearch",
      query: blogSearch,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static PostCategories() {
    const PostCategories = `
    query PostCategories {
      terms {
        nodes {
          name
        }
      }
    }`;
    const graphqlQuery = {
      operationName: "PostCategories",
      query: PostCategories,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static singlePostSettings({params}:any) {
      const singlePostSettingsQuery = `
        query SinglePostSettingsQuery {
          postBy(slug: "${params.slug}") {
                postId
                slug
                title
                date
                content
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                categories {
                  nodes {
                    categoryId
                    name
                  }
                }
                tags {
                  nodes {
                    name
                  }
                }
          }
        }
      `;

      const graphqlQuery = {
        operationName: "SinglePostSettingsQuery",
        query: singlePostSettingsQuery,
      };
      console.log("test",axios({
        url: baseURL,
        method: "post",
        headers: headers,
        data: graphqlQuery,
      }));
      return axios({
        url: baseURL,
        method: "post",
        headers: headers,
        data: graphqlQuery,
      });
  }

}