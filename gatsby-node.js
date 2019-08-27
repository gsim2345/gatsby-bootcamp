const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
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