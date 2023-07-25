import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/Common/Seo'

type BlogPostProps = {
    data: {
        mdx: {
            frontmatter: {
                title: string
                date: string
            }
        }
    }
    children: React.ReactNode
}

const BlogPost: FC<BlogPostProps> = ({ data, children }) => {
    return (
        <div>
            {data.mdx.frontmatter.title}
            <p>{data.mdx.frontmatter.date}</p>
            {children}
        </div>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                date(formatString: "YYYY.MM.DD")
            }
        }
    }
`

export const Head = ({ data }: BlogPostProps) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost