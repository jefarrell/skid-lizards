import React from 'react';
import router from '../router';
import Layout from './Layout';

export const App = (props) => {
  const menu = props.PRISMIC_UNIVERSAL_DATA.menu.data.menu_links;
  console.log("in app:: ", props.PRISMIC_UNIVERSAL_DATA)
  return (
    <Layout menu={menu}>
      {router(props)}
    </Layout>
  );
};

export default App;
