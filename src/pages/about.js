import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="About"/>
                <h1>About Me</h1>
                <p> Blah blah blah</p>
                <p> <Link to='/contact'>Reach out:</Link></p>
            </Layout>
        </div>
    );
}

export default AboutPage;