import Head from 'next/head'
import Link from 'next/link'
import Header from "../components/header";
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Alert from "./alert";

export default function Home() {
  return (
      <Layout home>
          <Head>
              <title>{siteTitle}</title>
          </Head>
          <section className={utilStyles.headingMd}>
              <p>Xin chào tôi là Tiến Đẹp Trai</p>
              <p>
                  (This is a sample website - you’ll be building a site like this on{' '}
                  <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
              </p>
              <Alert>
                  <h2 type>Ahihi</h2>
              </Alert>
          </section>
      </Layout>
  )
}
