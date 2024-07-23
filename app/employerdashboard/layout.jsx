// employerdashboard/layout.jsx
import React from 'react';
import Header from './_components/Header';
import Sidebar from './_components/Sidebar';
import styles from './styles/Dashboard.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <Sidebar />
                {/* <div className={styles.mainContent}>
                    {children}
                </div> */}
            </div>
        </div>
    );
}

export default Layout;
