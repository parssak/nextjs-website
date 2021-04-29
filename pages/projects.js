import Head from 'next/head'
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import styles from '../styles/Home.module.css'

export default function ProjectsPage() {
    return (
        <div className={styles.container} >
            <Head>
                <title>Parssa K | Projects</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Projects />

        </div>
    )
}
