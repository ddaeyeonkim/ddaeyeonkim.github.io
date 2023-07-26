import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/Common/Seo'
import Template from '../components/Common/Template'
import PostHead from '../components/Post/PosstHead'
import PostContent from '../components/Post/PostContent'

type BlogPostProps = {
    data: {
        mdx: {
            frontmatter: {
                title: string
                date: string
                summary: string
                categories: string[]
            }
        }
    }
    children: React.ReactNode
}

const BlogPost: FC<BlogPostProps> = ({ data, children }) => {
    return (
        <Template>
            <PostHead
                title={data.mdx.frontmatter.title}
                date={data.mdx.frontmatter.date}
                categories={data.mdx.frontmatter.categories}
            />
            <PostContent>
                {children}
            </PostContent>
        </Template>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                summary
                date(formatString: "YYYY.MM.DD")
                categories
            }
        }
    }
`

export const Head = ({ data }: BlogPostProps) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost