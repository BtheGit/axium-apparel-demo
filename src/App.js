import React from 'react';
import { Helmet } from 'react-helmet';
import Routes from './containers/Routes';
import Header from './containers/Header';
import Footer from './containers/Footer';
import ModalRoot from './containers/ModalRoot';

const App = () => (
  [
    <Helmet key="aa"
      titleTemplate="Axium Apparel - %s"
      defaultTitle="Axium Apparel"
    >
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <meta name="description" content="Axium Apparel: Apparel made by mathematicians!" />
      <meta name="author" content="Brendan Beltz - brendanbeltz@gmail.com" />
    </Helmet>,
    <Header key="bb" />,
    <Routes key="cc" />,
    <Footer key="dd" />,
    <ModalRoot key="ee" />
  ]
)

export default App;

// <main className="main-container"key="cc">
// <Routes />
// </main>,