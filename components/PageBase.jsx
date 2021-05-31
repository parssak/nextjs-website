import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head'
import Contact from '../components/Contact'
import NavBar from './NavBar'
import styles from '../styles/Home.module.css'
import NextProject from './NextProject';
import AlertBox from './AlertBox';

const PageBase = ({ pageTitle, children, nextProjectName, shouldScroll, setShouldScroll }) => {
    const [alertBox, setAlertBox] = useState({}); // {text: string, type: 'success' | 'error'}
    const ref = useRef();

    useEffect(() => {
        document.querySelector("body").scrollTo(0, 0)
    }, [])

    useEffect(() => shouldScroll && onContactClick(), [shouldScroll]);

    const onContactClick = () => {
        ref.current.scrollIntoView({
            behavior: "smooth",
        });
        setShouldScroll && setShouldScroll(false);
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>{pageTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Passionate about creating useful tools through software." />
                
                <meta property="og:url" content={`//www.parssak.com/${pageTitle}`} key="ogurl" />
                <meta property='og:image' content='//parssak.com/previewimg.png' />
                <meta property="og:site_name" content="Parssa K" key="ogsitename" />
                <meta property="og:title" content="Parssa Kyanzadeh" key="ogtitle" />
        +       <meta property="og:description" content="Parssa Kyanzadeh's personal website/portfolio" key="ogdesc" />
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
