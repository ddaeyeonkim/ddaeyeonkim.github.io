import React, { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from './GlobalStyle'
import Footer from './Footer'
import NavBar from './NavBar'

type TemplateProps = {
    children: ReactNode
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const ChildWrapper = styled.div`
    padding-top: 80px;
`

const Template: FC<TemplateProps> = function ({ children }) {
    return (
        <Container>
            <GlobalStyle />
            <NavBar />
            <ChildWrapper>{children}</ChildWrapper>
            <Footer />
        </Container>
    )
}

export default Template