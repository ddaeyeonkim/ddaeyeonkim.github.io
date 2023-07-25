import React, { FC, useMemo } from "react"
import { graphql } from "gatsby"
import CategoryList, { CategoryListProps } from "../components/Main/CategoryList"
import PostList from "../components/Main/PostList"
import queryString, { ParsedQuery } from "query-string"
import { PostListItemType } from "../components/Main/PostItem.types"
import Seo from "../components/Common/Seo"
import Template from "../components/Common/Template"

type IndexPageProps = {
  location: {
    search: string
  }
  data: {
    allMdx: {
      nodes: PostListItemType[]
    }
  }
}

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
        list: CategoryListProps['categoryList'],
        {
          frontmatter: { categories },
        }: PostListItemType,
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
    <Template>
      <CategoryList selectedCategory={selectedCategory} categoryList={categoryList} />
      <PostList selectedCategory={selectedCategory} posts={nodes} />
    </Template>
  )
}

export const query = graphql`
    query {
        allMdx(sort: {fields: [frontmatter___date, frontmatter___title], order: DESC}) {
            nodes {
                id,
                frontmatter {
                    title
                    summary
                    date(formatString: "YYYY.MM.DD")
                    categories
                    thumbnail
                    slug
                }
            }
        }
    }
`

export const Head = () => <Seo title={'Home page'} />

export default IndexPage