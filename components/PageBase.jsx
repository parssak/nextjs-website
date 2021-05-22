import React, { useState } from 'react';
import Head from 'next/head'
import Contact from '../components/Contact'
import NavBar from './NavBar'
import styles from '../styles/Home.module.css'
import NextProject from './NextProject';
import AlertBox from './AlertBox';

const PageBase = ({ pageTitle, children, nextProjectName }) => {
    // alertBox: {text: string, type: 'success' | 'error'}
    const [alertBox, setAlertBox] = useState({});

    return (
        <div className={styles.container}>
            <Head>
                <title>{pageTitle}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <AlertBox alertBox={alertBox}/>
            {children}
            {nextProjectName && <NextProject nextProjectName={nextProjectName} />}
            <Contact setAlertBox={setAlertBox}/>
        </div>
    );
}

export default PageBase;
