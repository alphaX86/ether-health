import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Access() {
    return(
        <div className={styles.container}>
            <Head>
                <title>Access - ETXHeal</title>
                <meta name="description" content="A web3 dapp created using NextJS" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                <form method='get' action='/api/access'>
                <div className="mb-8">
                    <label htmlFor="hash" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Your ID</label>
                    <input type="text" id="hash" name = "hash" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*************" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </main>
            <Footer />
        </div>
    )
}
