import Head from "next/head";
import Header from "../../components/Header";
import ProductsFeed from "../../components/ProductsFeed";
import styled from "styled-components";
import Banner from "../../components/Banner";
const Category = ({ categories, products }) => {
  return (
    <Container>
      <Head>
        <title>amazon clone</title>
      </Head>
      <Header categories={categories} />
      <main>
        <Banner />
        <ProductsFeed products={products} />
      </main>
    </Container>
  );
};

export default Category;

export async function getServerSideProps(context) {
  const products = await fetch(
    `https://fakestoreapi.com/products/category/${context.params.category}`
  ).then((res) => res.json());
  const categories = await fetch(
    "https://fakestoreapi.com/products/categories"
  ).then((res) => res.json());

  return {
    props: { products, categories: ["all", ...categories] }, // will be passed to the page component as props
  };
}

const Container = styled.div``;
