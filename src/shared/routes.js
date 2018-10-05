import React from 'react';
import Page from './app/Page';
import HomePage from './app/HomePage';
import NotFoundPage from './app/NotFoundPage';
import About from './app/About';

export default (prismicCtx, PRISMIC_UNIVERSAL_DATA) => {
  return [
    { path: '/',
      component: HomePage,
      exact: true,
      render(props) {
        return <HomePage {...props} prismicCtx={prismicCtx} PRISMIC_UNIVERSAL_DATA={PRISMIC_UNIVERSAL_DATA} />;
      }
    },
    {
      path: '/page/:uid',
      component: Page,
      render(props) {
        return <Page {...props} prismicCtx={prismicCtx} PRISMIC_UNIVERSAL_DATA={PRISMIC_UNIVERSAL_DATA} />;
      }
    },
    {
      path: '/about',
      exact: true,
      component: About,
      render(props) {
        return <About {...props} prismicCtx={prismicCtx} PRISMIC_UNIVERSAL_DATA={PRISMIC_UNIVERSAL_DATA} />;
      }
    },
    {
      component: NotFoundPage
    }
  ];
}