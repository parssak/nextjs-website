import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head'
import Contact from '../components/Contact'
import NavBar from './NavBar'
import styles from '../styles/Home.module.css'
import NextProject from './NextProject';
import AlertBox from './AlertBox';

const PageBase = ({ pageTitle, children, nextProjectName }) => {
    const [alertBox, setAlertBox] = useState({}); // {text: string, type: 'success' | 'error'}
    const ref = useRef();

    useEffect(() => {
        document.querySelector("body").scrollTo(0, 0)
    }, [])

    const onContactClick = () => {
        console.log(ref);
        ref.current.scrollIntoView({
            behavior: "smooth",
        });
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>{pageTitle}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar onContactClick={onContactClick} />
            <AlertBox alertBox={alertBox} />
            {children}
            {nextProjectName && <NextProject nextProjectName={nextProjectName} />}
            <Contact setAlertBox={setAlertBox} contactRef={ref} />
        </div>
    );
}

export default PageBase;
