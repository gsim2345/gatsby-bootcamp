import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';


const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello</h1>
            <h2>I'm a frontend developer living in a lovely northern europian city.</h2>
            <p>Need a developer? <Link to='/contact'>Contact Me!</Link></p>
        </Layout>

    )

}

export default IndexPage;
