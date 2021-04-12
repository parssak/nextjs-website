import Head from 'next/head'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  return (
    <div className={styles.container} style={{ backgroundColor: 'black' }}>
      <Head>
        <title>Parssa K</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Projects />
      <Contact />
      <Footer/>
    </div>
  )
}
