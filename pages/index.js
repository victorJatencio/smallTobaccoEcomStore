import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smoke Pipes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}> 
          Tobacco Pipes For Sale
        </h1>
        <p className={styles.description}>Get Your Pipe Today And Happy Piping!</p>

        <ul className={styles.grid}>
          <li className={styles.card}>
            <a href="https://nextjs.org/docs">
              <img src="/images/Schmidt_Mediterranean_Briar.jpg" alt="Schmidt Mediterranean Briar"/>
              <h3>Schmidt Mediterranean Briar</h3>
              <p>Wood Tobacco Pipe</p>
            </a>
          </li>
          <li className={styles.card}>
            <a href="https://nextjs.org/learn">
              <img src="/images/Prince_Walnut_Mediterranean.jpg" alt="Prince Walnut Mediterranean"/>
              <h3>Prince Walnut Mediterranean</h3>
              <p>Briar Wood Tobacco Pipe</p>
            </a>
          </li>
          <li className={styles.card}>
            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
            >
              <img src="/images/Kaiser_Pear_Wood_Pipe_Kit.jpg" alt="Kaiser Pear Wood Pipe Kit"/>
              <h3>Kaiser Pear Wood Pipe</h3>
              <p>With Complete Accessories Kit</p>
            </a>
          </li>
          <li className={styles.card}>
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            >
              <img src="/images/Sherlock_Holmes_Italian_Olive.jpg" alt="Sherlock Holmes Italian Olive"/>
              <h3>Sherlock Holmes Italian Olive</h3>
              <p>
                Wood Tobacco Pipe
              </p>
            </a>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
