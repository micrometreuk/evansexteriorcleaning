import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>evansexteriorcleaning</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://evansexteriorcleaning.co.uk/">Evans Exterior cleaning!</a>
        </h1>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://evansexteriorcleaning.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </footer>
    </div>
  )
}
