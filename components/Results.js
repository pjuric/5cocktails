import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router';

function Results({cocktails}) {

    const router = useRouter()

    function cocktailDetails(cocktailId) {
        router.push(`/cocktail/${cocktailId}`)
    }

    // sort(() => 0.5 - Math.random()).

    return (
        <Container>
            {cocktails.data.drinks && cocktails.data.drinks.length > 0 ?
                cocktails.data.drinks.slice(0, 30).map(result => (
                    <Cocktail key={result.idDrink}>
                        <Thumbnail onClick={() => cocktailDetails(result.idDrink)} src={result.strDrinkThumb}/>
                        <p>{result.strDrink}</p>
                    </Cocktail>
                ))
            :
                <h1>No results</h1>
            }
        </Container>
    )
}

export default Results

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`

const Cocktail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    p{
        text-align: center;
        color: white;
        margin-top: 5px;
        font-size: 20px;
    }
`

const Thumbnail = styled.img`
    width: 400px;
    border-radius: 10px;
    cursor: pointer;
    opacity: 0.85;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 800px) {
        width: 300px;
    }

    &:hover{
        transform: scale(1.01);
        opacity: 1;
    }
`