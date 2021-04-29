import Head from 'next/head'
import About from '../components/About'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

export default function AboutPage() {
    return (
        <div className={styles.container} >
            <Head>
                <title>Parssa K | About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <About />
            
        </div>
    )
}
