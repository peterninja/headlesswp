import axios from "axios";
const baseURL = "http://209.182.213.242/~ninjatech/wordpress_demo/graphql";
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
    console.log("testing.. ",graphqlQuery);
    console.log("axios...",axios({
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