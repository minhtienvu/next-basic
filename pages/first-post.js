import Link from 'next/link'
import Head from 'next/head'
import Layout from "../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>Ahihi 1123</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                {/*<a href="/">Back to home</a>*/}
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}