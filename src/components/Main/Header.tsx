import React, { FC } from "react"
import styled from '@emotion/styled'

const Background = styled.div`
    width: 100%;
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    color: #ffffff;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 768px;
    height: 120px;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 100%;
        height: 100px;
        padding: 0 20px;
    }
`

const Title = styled.div`
    font-size: 35px;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 25px;
    }
`

const SubTitle = styled.div`
    font-size: 20px;
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 15px;
    }
`

const Header: FC = () => {
    return (
        <Background>
            <Wrapper>
                <div>
                    <Title>김대연 개발 블로그</Title>
                </div>
            </Wrapper>
        </Background>
    )
}

export default Header