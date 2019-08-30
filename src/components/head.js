import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

// destructure props
const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    return (
        // it doesn't show anything on screen, but manages the head of the document
        // Needs to include to every page
        <Helmet title={ `${title} | ${data.site.siteMetadata.title}`}/>
    );
}

export default Head;