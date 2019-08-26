import React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => {
    return (
        <div>
            <h1>About Me</h1>
            <p> Blah blah blah</p>
            <p> <Link to='/contact'>Reach out:</Link></p>
        </div>
    );
}

export default AboutPage;