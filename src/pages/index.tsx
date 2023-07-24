import React, { FC } from "react"
import { graphql } from "gatsby"
import styled from '@emotion/styled'
import GlobalStyle from "../components/Common/GlobalStyle"
import Header from "../components/Main/Header"
import Footer from "../components/Common/Footer"
import CategoryList from "../components/Main/CategoryList"
import PostList, { PostType } from "../components/Main/PostList"

type IndexPageProps = {
  data: {
    allMdx: {
      nodes: PostType[]
    }
  }
}

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const IndexPage: React.FC<IndexPageProps> = ({
  data: {
    allMdx: { nodes },
  }
}) => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList posts={nodes} />
      <Footer />
    </Container>
  )
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                id,
                frontmatter {
                    date(formatString: "YYYY.MM.DD.")
                    title
                    summary
                    categories
                    thumbnail
                }
            }
        }
    }
`

export default IndexPage