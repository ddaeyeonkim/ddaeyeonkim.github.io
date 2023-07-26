import React, { FC } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { PostFrontmatterType } from './PostItem.types'

type PostItemProps = PostFrontmatterType & { link: string }

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  transition: 0.3s box-shadow;
  cursor: pointer;
`

const PostItemContent = styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 20px;
  font-weight: 700;
  padding: 10px 0;

  ${PostItemWrapper}:hover & {
    color: #64766A;
    text-decoration: underline solid #64766A;
    text-underline-offset: 8px;
  }
`

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
`

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 10px -5px;
`

const CategoryItem = styled.div`
  margin: 2.5px 4px;
  padding: 3px 8px;
  border-radius: 16px;
  border: 1px solid #777;
  background: #fff;
  font-size: 12px;
  font-weight: 400;
  color: #222;
`

const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  opacity: 0.8;
`

const PostItem: FC<PostItemProps> = ({ title, date, categories, summary, slug, link }) => {
  return <PostItemWrapper to={link}>

    <PostItemContent>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Category>
        {categories.map(category => (
          <CategoryItem key={category}>{category}</CategoryItem>
        ))}
      </Category>
      <Summary>{summary}</Summary>
    </PostItemContent>
  </PostItemWrapper>
}

export default PostItem