import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Alert from "../components/Alert";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  console.log("pritnareio");
  console.log(allPostsData);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Portfolio - Felipe Muner</p>
        <Alert type="error">ola</Alert>
        <p>
          here you will he my detailed skills{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
