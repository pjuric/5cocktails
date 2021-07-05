import React from 'react'
import styled from 'styled-components'

function Nav() {
    return (
        <Container>
            <Logo src="./images/logo.png"/>
            <Menu>
                <a href="/">Home</a>
                <a href="/explore">Cocktails</a>
                <a href="/name">Search</a>
                <a href="/about">About</a>
            </Menu>
        </Container>
    )
}

export default Nav

const Container = styled.div`
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`

const Logo = styled.img`
    height: 60px;
    margin-bottom: 10px;

    @media screen and (max-width: 800px) {
        display: none;
    }
`

const Menu = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;

    a{
        text-decoration: none;
        color: #5A4D32;
        font-size: 21px;
        font-weight: 600;

        &:hover{
            color: black;
        }
    }

    @media screen and (max-width: 800px) {
        width: 85%;

        a{
            font-size: 20px;
            font-weight: 600;
        }
    }
`