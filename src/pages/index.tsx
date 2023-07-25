import React, { FC, useMemo } from "react"
import { graphql } from "gatsby"
import styled from '@emotion/styled'
import GlobalStyle from "../components/Common/GlobalStyle"
import Header from "../components/Main/Header"
import Footer from "../components/Common/Footer"
import CategoryList, { CategoryListProps } from "../components/Main/CategoryList"
import PostList, { PostType } from "../components/Main/PostList"
import queryString, { ParsedQuery } from "query-string"

type IndexPageProps = {
  location: {
    search: string
  }
  data: {
    allMdx: {
      nodes: PostType[]
    }
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const IndexPage: React.FC<IndexPageProps> = ({
  location: { search },
  data: {
    allMdx: { nodes },
  }
}) => {
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedCategory: string = typeof parsed.category !== 'string' || !parsed.category ? 'All' : parsed.category

  const categoryList = useMemo(
    () => nodes.reduce(
      (
        list: CategoryListProps['categoryList' ], 
        {
          frontmatter: { categories },
        }: PostType,
      ) => {
        categories.forEach((category: string) => {
          if (list[category] === undefined) {
            list[category] = 1;
          } else {
            list[category]++;
          }
        });

        list['All']++;

        return list;
      },
      { All: 0 },
    ),
    [],
  )

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <CategoryList selectedCategory={selectedCategory} categoryList={categoryList} />
      <PostList selectedCategory={selectedCategory} posts={nodes} />
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