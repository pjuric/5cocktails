import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

function Buttons({ lucky, second }) {

    const router = useRouter()
    const randomCocktail = () => {
        router.push(`/cocktail/${lucky}`)
    }

    return (
        <Container>
            <Button onClick={randomCocktail}>I'm feeling lucky</Button>
            {second &&
                <Second href="/explore">Explore</Second>
            }
            
        </Container>
    )
}

export default Buttons

const Container = styled.div`
   display: flex;
   margin-top: 20px;
`

const Button = styled.a`
    border-radius: 10px;
    background: #D44245;
    height: 40px;
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    color: white;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        background: rgba(212, 66, 69, 0.85);
    }
`

const Second = styled(Button)`
    margin-left: 10px;
    background: #E47F23;

    &:hover{
        background: rgba(228, 127, 35, 0.85);
    }
`