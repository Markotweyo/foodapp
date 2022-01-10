import Head from 'next/head'
import Featured from '../components/Featured'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Resturant in Nairobi</title>
        <meta name="description" content="Best Pizza shop in Nairobi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Featured/>
      

      
    </div>
  )
}
