import Head from 'next/head'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import SelectedProjects from '../components/SelectedProjects'
import { Title } from '../components/styles'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container} >
      <Head>
        <title>Parssa K</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
      <SelectedProjects />
      <Contact />
      
    </div>
  )
}
