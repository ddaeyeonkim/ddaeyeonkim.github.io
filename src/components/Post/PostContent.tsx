import React, { Component, FC } from 'react'
import styled from '@emotion/styled'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from './CodeBlock'

interface PostContentProps {
    children: React.ReactNode
}

const MarkdownRenderer = styled.div`
    // Renderer Style
    display: flex;
    flex-direction: column;
    width: 768px;
    margin: 0 auto;
    padding: 100px 0;
    word-break: break-all;
    
    // Markdown Style
    line-height: 1.8;
    font-size: 16px;
    font-weight: 400;

    // Apply Padding Attribute to All Elements
    p {
        padding: 3px 0;
    }

    // Adjust Heading Element Style
    h1,
    h2,
    h3 {
        font-weight: 800;
        margin-bottom: 30px;
    }

    * + h1,
    * + h2,
    * + h3 {
        margin-top: 80px;
    }

    hr + h1,
    hr + h2,
    hr + h3 {
        margin-top: 0;
    }

    h1 {
        font-size: 30px;
    }

    h2 {
        font-size: 25px;
    }

    h3 {
        font-size: 20px;
    }

    // Adjust Quotation Element Style
    blockquote {
        margin: 30px 0;
        padding: 5px 15px;
        border-left: 4px solid #ddd;
        font-weight: 700;
        color: #777;
    }

    // Adjust List Element Style
    ol,
    ul {
        margin-left: 20px;
        padding: 30px 0;
    }

    // Adjust Horizontal Rule style
    hr {
        border: 1px solid #ddd;
        margin: 100px 0;
    }

    // Adjust Link Element Style
    a {
        color: #94A7AE;
        text-decoration: underline;
    }

    // 코드 블록 스타일
    pre[class*="language-"] {
        background-color: #f5f5f5;
        padding: 1em;
    }
    pre[class*="language-"] span {
        font-family: 'Nanum Gothic Coding', monospace;
    }
    pre[class*="language-"], code[class*="language-"] {
        &::selection {
            background: #ddd;
        }
        & ::selection {
            background: #ddd;
        }
    }

    // Markdown Responsive Design
    @media (max-width: 768px) {
        width: 100%;
        padding: 80px 20px;
        line-height: 1.6;
        font-size: 14px;

        h1 {
        font-size: 23px;
        }

        h2 {
        font-size: 20px;
        }

        h3 {
        font-size: 17px;
        }

        img {
        width: 100%;
        }

        hr {
        margin: 50px 0;
        }
    }
`

const PostContent: FC<PostContentProps> = ({ children }) => {
    return (
        <MarkdownRenderer>
            <MDXProvider
                components={{
                    // TODO: CodeBlock 컴포넌트를 tsx로 작성
                    pre: CodeBlock as any,
                }}
            >
                {children}
            </MDXProvider>
        </MarkdownRenderer>
    )
}

export default PostContent