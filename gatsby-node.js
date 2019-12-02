const _ = require('lodash');

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors;
    }
    return result;
  });

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = require.resolve('./src/templates/post.jsx');
  const tagTemplate = require.resolve('./src/templates/tag.jsx');

  const result = await wrapper(
    graphql(`
      {
        allPrismicPost {
          edges {
            node {
              id
              uid
            }
          }
        }
      }
    `)
  )

  const tagSet = new Set();
  const postsList = result.data.allPrismicPost.edges;

  postsList.forEach(edge => {


    // if (edge.node.data.tags[0].tag) {
    //   edge.node.data.tags.forEach(tag => {
    //     tagSet.add(tag.tag.document[0].data.name)
    //   });
    // }


    // The uid you assigned in Prismic is the slug!
    createPage({
      path: `/${edge.node.uid}`,
      component: postTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
      },
    });
  });

  // const tagList = Array.from(tagSet);

  // tagList.forEach(tag => {
  //   createPage({
  //     path: `/tags/${_.kebabCase(tag)}`,
  //     component: tagTemplate,
  //     context: {
  //       tag,
  //     },
  //   });
  // });
}
