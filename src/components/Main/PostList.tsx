import React, { FC } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import PostItem from './PostItem'

export type PostType = {
    id: string
    frontmatter: {
        title: string
        summary: string
        date: string
        categories: string[]
    }
}

type PostListProps = {
    posts: PostType[]
}

const PostListWrapper = styled.div`
    width: 768px;
    margin: 0 auto;
    padding: 50px 0;

    @media (max-width: 768px) {
        width: 100%;
        padding: 50px 20px;
    }
`

const PostList: React.FC<PostListProps> = ({
    posts,
}) => {
    return <PostListWrapper>
        {posts.map(
            ({
                id, frontmatter,
            }: PostType) => (
                <PostItem
                    {...frontmatter}
                    link="https://www.google.co.kr/"
                    key={id}
                />
            )
        )}
    </PostListWrapper>
}

export default PostList