import React from "react";
import Layout from "../../components/Layout";
import WelcomeJumbotron from "./components/WelcomeJumbotron";
import ThreeColumns from "./components/ThreeColumns";
import QuoteJumbotron from "./components/QuoteJumbotron";

const Home = React.memo(() => {
  return (
    <Layout>
      <WelcomeJumbotron />
      <br />
      <ThreeColumns />
      <QuoteJumbotron />
    </Layout>
  );
});

export default Home;
