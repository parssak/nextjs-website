import Head from 'next/head';
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar';
import Kazakan from '../components/projects/Kazakan';
import Darco from '../components/projects/Darco';

const KazakanPage = () => {
    return (
        <div className={styles.container} >
            <Head>
                <title>Parssa K | Darco</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Darco />

        </div>
    );
}

export default KazakanPage;
