import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// not using staticquery in template file, instead define it separately, and export it. Because no way to access the context which containes our slug if we use the useStaticquery
// gatsby grabs this graphql query, the $slug will come from the variable that we set up to create the page. 
// the response will be provided as props to our component
/*
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
*/

export const query = graphql`
    query ($slug: String!) {
        contentfulBlogPost (slug : {eq: $slug }) {
            title
            publishedDate (formatString: "MMMM Do, YYYY")
            body {
                json
            }
        }
    }
`

const Blog = (props) => {

    const options = {
        // customize how that node is rendered
        renderNode:  {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US'];
                const url = node.data.target.fields.file['en-US'].url;
                return <img alt={alt} src={url}/>
            }
        }
    }
    return (
        <Layout>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </Layout>
    );
}

export default Blog;