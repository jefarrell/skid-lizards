import Prismic from 'prismic-javascript'

export default function prismicQuery(targetPage) {
    const fetchData = (ctx) => {

    const blogPromise = ctx.api.query(
      Prismic.Predicates.at('document.type', 'blog-post')
    )

    const allPromises = Promise.all([blogPromise])

    return new Promise(resolve => {
      allPromises.then((values) => {
        const pageData = values[0]
        resolve(pageData)
      })
    })
  }
  return (fetchData)
}