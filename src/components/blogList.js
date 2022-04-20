import React from 'react'
import { graphql,useStaticQuery } from 'gatsby'
import BlogPost from './blogPost'

export default function BlogList(){

    const data=useStaticQuery(graphql`
    query{
        allMarkdownRemark{
            edges{
                node{
                    id
                    frontmatter{
                        title
                        date(formatString: "MMMMM D,YYYY")
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
                title={edge.node.frontmatter.title}
                date={edge.node.frontmatter.date}
                excerpt={edge.node.excerpt}
                ></BlogPost>
            ))}
        </div>
    );
}