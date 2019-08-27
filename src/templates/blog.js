import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

// not using staticquery in template file, instead define it separately, and export it. Because no way to access the context which containes our slug if we use the useStaticquery
// gatsby grabs this graphql query, the $slug will come from the variable that we set up to create the page. 
// the response will be provided as props to our component
export const query = graphql`
    query ($slug: String!){
        markdownRemark (
        fields:{
            slug: {
                eq: $slug
            }
        }) 
        {
        frontmatter {
            title
            date
        }
        html
        }
    }
`

const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        </Layout>
    );
}

export default Blog;