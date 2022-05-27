import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './components/Header'
import Footer from './components/Footer'

function test() {
  var Web3 = require('web3');
  const provider = 'https://eth-mainnet.alchemyapi.io/v2/g5rpUpvN8EVa4q0r3trp-7HhAeAYP8e5';
  var web3Provider = new Web3.providers.HttpProvider(provider);
  var web3 = new Web3(web3Provider);
  web3.eth.getBlockNumber().then((result) => {
    console.log("Latest Ethereum Block is ",result);
  });
  web3.eth.getGasPrice().then((result)=> {
    console.log("Gas Price is ",result);
  });
}

export default function Home() {
  test();
  return (
    <div className={styles.container}>
      <Head>
        <title>ETXHeal</title>
        <meta name="description" content="A web3 dapp created using NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
