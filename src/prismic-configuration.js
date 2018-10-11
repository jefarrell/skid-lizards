export default {

  apiEndpoint: 'https://bikepackdeathpact.prismic.io/api/v2',

  // -- Access token if the Master is not open
  // accessToken: 'xxxxxx',

  // OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx',

  // -- Links resolution rules
  // This function will be used to generate links to Prismic.io documents
  // As your project grows, you should update this function according to your routes
  linkResolver(doc) {
    if (doc.type === "blog-post") return "/page/" + doc.uid;
    if (doc.type === "about-page") return "/about"
    return '/';
  },
};