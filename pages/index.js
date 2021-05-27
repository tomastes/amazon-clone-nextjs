import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import ProductsFeed from "../components/ProductsFeed";

export default function Home({ products, categories }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>welcome to amazon</title>
      </Head>
      <Header categories={categories} />
      <main className={styles.main}>
        <Banner />
        <ProductsFeed products={products} />
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  const categories = await fetch(
    "https://fakestoreapi.com/products/categories"
  ).then((res) => res.json());

  return {
    props: { products, categories: ["all", ...categories] }, // will be passed to the page component as props
  };
}
