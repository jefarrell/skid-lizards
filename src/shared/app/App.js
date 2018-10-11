import React from 'react';
import router from '../router';
import Layout from './Layout';
import { withRouter } from 'react-router'

export const App = (props) => {
  const menu = props.PRISMIC_UNIVERSAL_DATA.menu.data.menu_links;
  return (
    <Layout menu={menu}>
      {router(props)}
    </Layout>
  );
};

export default withRouter(App);
