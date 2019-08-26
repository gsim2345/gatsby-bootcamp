import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/header';

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About Me</h1>
            <p> Blah blah blah</p>
            <p> <Link to='/contact'>Reach out:</Link></p>
            <Footer />
        </div>
    );
}

export default AboutPage;