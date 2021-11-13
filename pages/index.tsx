import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Index.module.css'

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sample App</title>
        <meta name="description" content="sample application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Index
