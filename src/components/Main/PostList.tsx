import React, { FC, useMemo } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'
import { PostListItemType } from './PostItem.types'

type PostListProps = {
    selectedCategory: string
    posts: PostListItemType[]
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

const PostList: FC<PostListProps> = ({
    selectedCategory,
    posts,
}) => {
    const postListData = useMemo(
        () => posts.filter(
            ({ frontmatter: { categories } }) =>
                selectedCategory !== 'All'
                    ? categories.includes(selectedCategory)
                    : true,
        ),
        [selectedCategory],
    )

    return <PostListWrapper>
        {postListData.map(
            ({
                id,
                frontmatter,
            }: PostListItemType) => (
                <PostItem
                    {...frontmatter}
                    link={`/${frontmatter.slug}`}
                    key={id}
                />
            )
        )}
    </PostListWrapper>
}

export default PostList