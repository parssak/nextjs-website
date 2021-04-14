import Head from 'next/head';
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar';
import MixBot from '../components/projects/MixBot';

const KazakanPage = () => {
    return (
        <div className={styles.container} style={{ backgroundColor: 'black' }}>
            <Head>
                <title>Parssa K | MixBot</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <MixBot/>
        </div>
    );
}

export default KazakanPage;
