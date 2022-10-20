import "../styles/vendor/bootstrap.css";
import "../styles/common/main.css";
import "../styles/common/main.bundle.css";
import "../styles/layouts/vertical/core/main.css";
import "../styles/layouts/vertical/themes/theme-a.css";
import "../styles/layouts/vertical/menu-type/default.css";
import "../styles/icons/material-design-iconic-font.min.css";
import "../styles/icons/dripicons.min.css";
import "../styles/icons/line-awesome.min.css";
import "../styles/icons/simple-line-icons.css";
import "../styles/vendor/metismenu/dist/metisMenu.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { Layout } from "../components/layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>SGC ARGOS</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/icon.png" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
