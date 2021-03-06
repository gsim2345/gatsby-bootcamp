const path = require('path');

// we use to generate slugs, using contentful we don't need it anymore , we generate it there
/*
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    // Transform the new node here and create a new node or
    // create a new node field.

    if (node.internal.type === "MarkdownRemark") {
        //https://nodejs.org/dist/latest-v10.x/docs/api/path.html#path_path_basename_path_ext
        // get our node
        const slug = path.basename(node.fileAbsolutePath, '.md');
        
        // add the new field onto the node
        createNodeField({
            node,
            name: 'slug',
            value: slug
        });

        //console.log(JSON.stringify(node, undefined, 4));
    }
    
  }
  */

module.exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions;

    // 1. Get path to template
    const blogTemplate = path.resolve('./src/templates/blog.js');
    //path.resolve() creates an absolute path 


    /* 
    // 2. Get markdown data
    // this graphql function is not the same as the one coming from Gatsby This function returns a promise. 
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `); */
    // Instead of markdown data, we need the contentful data
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `); 


    // 3. Create new pages
    /*
    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    });*/
    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    });
};