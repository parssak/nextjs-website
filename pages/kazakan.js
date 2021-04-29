import Head from 'next/head';
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar';
import Kazakan from '../components/projects/Kazakan';

const KazakanPage = () => {
    return (
        <div className={styles.container} >
            <Head>
                <title>Parssa K | Kazakan</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Kazakan />

        </div>
    );
}

export default KazakanPage;
