import React, { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from './GlobalStyle'
import Footer from './Footer'
import NavBar from './NavBar'

type TemplateProps = {
    children: ReactNode
}

const Container = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const ContentWrapper = styled.div`
    padding-top: 80px;
    height: auto;
    min-height: calc(100vh - 80px);
`

const FooterWrapper = styled.footer`
    height: 80px;
`

const Template: FC<TemplateProps> = function ({ children }) {
    return (
        <Container>
            <GlobalStyle />
            <NavBar />
            <ContentWrapper>{children}</ContentWrapper>
            <FooterWrapper><Footer /></FooterWrapper>
        </Container>
    )
}

export default Template