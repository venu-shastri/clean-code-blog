exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  
}

const {createFilePath} =require('gatsby-source-filesystem');
const path=require('path');
exports.onCreateNode=function({node,getNode,actions}){

  const {createNodeField}=actions;
  if(node.internal.type=='MarkdownRemark'){
    const slug=createFilePath({node,getNode});
    createNodeField({
      node,name:'slug',value:slug
    });
  }
};

exports.createPages=async function({graphql,actions}){

  const {createPage}=actions;
  const result=await graphql(`
  query{
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            contentKey
          }
          fields{
            slug
            
          }
        }
      }
    }
  }
  
  `)

  const posts=result.data.allMarkdownRemark.edges.filter(edge=>edge.node.frontmatter.contentKey==='blog');

  posts.forEach(({node})=>{

    createPage({
      path:node.fields.slug,
      component:path.resolve('./src/templates/blog.js'),
      context:{
        slug:node.fields.slug
      }
    })

  })

}