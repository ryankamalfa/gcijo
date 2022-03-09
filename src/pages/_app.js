import  React  from "react";
import App from "next/app";
import Head from "next/head";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { fetchCatalouges } from "../redux/actions/catalougeActions";
import { fetchProducts } from "../redux/actions/productActions";
import { fetchArabicProducts } from "../redux/actions/productActions";
import { fetchCategories } from "../redux/actions/categoryActions";
import catalouges from "../data/catalouges.json";
import arabicCatalouges from "../ar/data/catalouges.json";
import products from "../data/products.json";
import arabicProducts from "../ar/data/products.json";
import categories from "../data/categories.json";
import "../assets/scss/styles.scss";

class MyApp extends App {
  constructor(props) {
    super(props);
    this.persistor = persistStore(props.reduxStore);
    props.reduxStore.dispatch(fetchCategories(categories));
    props.reduxStore.dispatch(fetchArabicProducts(arabicProducts));
    props.reduxStore.dispatch(fetchProducts(products));
    props.reduxStore.dispatch(fetchCatalouges(catalouges));
    props.reduxStore.dispatch(fetchCatalouges(arabicCatalouges));
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;


    return (
      <>
        <Head>
          <title>Golden Paints</title>
          <link rel="icon" href={process.env.PUBLIC_URL + "/favicon.ico"} />
          
        </Head>
        <ToastProvider placement="bottom-left">
          <Provider store={reduxStore}>
            <PersistGate
              loading={<Component {...pageProps} />}
              persistor={this.persistor}
            >
              <Component {...pageProps} />
            </PersistGate>
          </Provider>
        </ToastProvider>
      </>
    );
  }
}

export default withReduxStore(MyApp);
