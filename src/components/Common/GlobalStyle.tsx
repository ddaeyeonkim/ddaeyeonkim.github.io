import React, { FC } from "react"
import { Global, css } from '@emotion/react'

const defaultStyle = css`
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&display=swap');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Nanum Gothic', serif;
    }

    html,
    body,
    #___gatsby {
        height: 100%;
    }

    a,
    a:hover {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
`

const GlobalStyle: FC = () => {
    return (
        <Global styles={defaultStyle} />
    )
}

export default GlobalStyle