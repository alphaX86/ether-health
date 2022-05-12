import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Gun from 'gun/gun'
import Header from './components/Header';
import Footer from './components/Footer';

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

const gun = Gun();
export default function Menu() {
  test();
  return(
    <div className={styles.container}>
        <Head>
            <title>Menu - ETXHeal</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className={styles.main}>
            <h1 className={styles.title}>Menu page</h1>
            <p className={styles.description}>
                Choose your option!
            </p>
            <div className={styles.grid}>
                <a href="/register" className={styles.card}>
                    <h2>Register</h2>
                    <p>Register to the dapp</p>
                </a>

                <a href="/login" className={styles.card}>
                    <h2>Login</h2>
                    <p>Login to the dapp</p>
                </a>

                <a href="/access" className={styles.card}>
                    <h2>Access</h2>
                    <p>Quick Access to the details</p>
                </a>
            </div>
        </main>
        <Footer />
    </div>
  )
}
