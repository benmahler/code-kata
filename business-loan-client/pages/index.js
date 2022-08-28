import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FormStep1 from '../components/form_step_1'
import FormStep2 from '../components/form_step_2'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Get a Business Loan</title>
        <meta name="description" content="An example business loan client built for Demyst" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Get a Business Loan
        </h1>

        <p className={styles.description}>
          Get started by entering your business details:
        </p>

        <FormStep1></FormStep1>
        <FormStep2></FormStep2>

      </main>

    <Footer></Footer>
      
    </div>
  )
}
