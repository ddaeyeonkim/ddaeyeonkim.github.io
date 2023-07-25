import React, { FC } from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled';

const NavWrapper = styled.nav`
    font-size: 15px;
    padding: 25px 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    position: fixed;
    width: 100%;
    margin: 0 auto;
    z-index: 1;
`

const Title = styled.div`
    font-size: 20px;
    font-weight: 500;
`

const NavBar: FC = () => {
    return (
        <NavWrapper>
            <Link to="/">
                <Title>김대연 기술 블로그</Title>
            </Link>
        </NavWrapper>
    )
}

export default NavBar