import React, { FC } from 'react'
import styled from '@emotion/styled'

export type PostHeaderProps = {
    title: string
    date: string
    categories: string[]
}

const PostHeadWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 150px;

    @media (max-width: 768px) {
        height: 150px;
    }
`

const PostHeadInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 768px;
    height: 100%;
    margin: 0 auto;
    padding: 20px 0;
    color: #222;

    @media (max-width: 768px) {
        width: 100%;
        padding: 40px 20px;
    }
`

const Title = styled.div`
    display: -webkit-box;
    overflow: hidden;
    overflow-wrap: break-word;
    margin-top: auto;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 40px;
    font-weight: 800;

    @media (max-width: 768px) {
        font-size: 30px;
    }
`

const PostData = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    font-size: 18px;
    font-weight: 700;
    color: #777;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        font-size: 15px;
        font-weight: 400;
    }
`

const PostHead: FC<PostHeaderProps> = ({ title, date, categories }) => {
    return (
        <PostHeadWrapper>
            <PostHeadInfoWrapper>
                <Title>{title}</Title>
                <PostData>
                    <div>{date}</div>
                </PostData>
            </PostHeadInfoWrapper>
        </PostHeadWrapper>
    )
}

export default PostHead