import React from 'react'
import { graphql,useStaticQuery } from 'gatsby'
import BlogPost from './blogPost'

export default function BlogList(){

    const data=useStaticQuery(graphql`
    query{
        allMarkdownRemark(sort: {fields:[frontmatter___date],order:DESC}
                          filter:{frontmatter: {contentKey: {eq: "blog"}}}
        ){
            edges{
                node{
                    id
                    frontmatter{
                        title
                        date(formatString: "MMMMM D,YYYY")
                    }
                    fields{
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`);
    return (
        <div>
            {data.allMarkdownRemark.edges.map(edge=>(
                <BlogPost 
                key={edge.node.id} 
                slug={edge.node.fields.slug}
                title={edge.node.frontmatter.title}
                date={edge.node.frontmatter.date}
                excerpt={edge.node.excerpt}
                ></BlogPost>
            ))}
        </div>
    );
}