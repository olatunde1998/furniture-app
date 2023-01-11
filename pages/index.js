import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Contact from '../components/contact'
import Galleries from '../components/galleries'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Hero/>
        <Contact/>
        <Galleries/>
      </main>
    </>
  )
}
