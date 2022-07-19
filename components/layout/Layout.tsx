import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from '../navigation/navbar/Navbar';
import Footer from '../navigation/footer/Footer';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
    <>
        <Head>
            <title>Recipes App</title>
        </Head>
        <Navbar />
        {children}
        <Footer />
    </>
);

export default Layout;
