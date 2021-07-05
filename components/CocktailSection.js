import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router';

function CocktailSection({glassC, sectionName, type}) {

    const router = useRouter();
    const cocktailDetailsFirst = () => {
        router.push(`/cocktail/${glassC[0].idDrink}`)
    }
    const cocktailDetailsSecond = () => {
        router.push(`/cocktail/${glassC[1].idDrink}`)
    }
    const cocktailDetailsThird = () => {
        router.push(`/cocktail/${glassC[2].idDrink}`)
    }

    function handleType(category, id) {
        router.push(`/type/${category}/${id}`)
    }

    return (
        <Container>
            <h1 onClick={() => handleType(type, sectionName)}>{sectionName}</h1>
            <ImgContainer>
                <ImageBox>
                    <CocktailImage src={glassC[0].strDrinkThumb} onClick={cocktailDetailsFirst}/>
                    <Name>{glassC[0].strDrink}</Name>
                </ImageBox>
                <ImageBox>
                    <CocktailImageBig src={glassC[1].strDrinkThumb} onClick={cocktailDetailsSecond}/>
                    <Name>{glassC[1].strDrink}</Name>
                </ImageBox>
                <ImageBox>
                    <CocktailImageSecond src={glassC[2].strDrinkThumb} onClick={cocktailDetailsThird}/>
                    <Name>{glassC[2].strDrink}</Name>
                </ImageBox>
            </ImgContainer>
        </Container>
    )
}

export default CocktailSection

const Container = styled.div`
    padding: 50px;
    text-align: center;
    color: white;
    border-bottom: 2px solid #E47F23;
    margin: 0px 10px;

    h1{
        text-decoration: none;
        color: #EAE8E9;
        cursor: pointer;

        &:hover{
            color: white;
        }
    }
`

const ImgContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 25px;

    @media screen and (max-width: 1200px) {
        flex-direction: column;
    }
`

const Name = styled.h3`
    opacity: 0;

    @media screen and (max-width: 1200px) {
        opacity: 1;
}
`

const CocktailImage = styled.img`
    width: 350px;
    border-radius: 10px;
    /* box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotateY(-20deg); */
    margin-bottom: 10px;
    cursor: pointer;
    /* -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.5); 
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.5); */
    opacity: 0.85;

    &:hover + ${Name} {
        opacity: 1;
    }

    &:hover{
        transform: none;
        box-shadow: none;
        -webkit-box-shadow: none;
        opacity: 1;
        transform: scale(1.01);
    }

    @media screen and (max-width: 1200px) {
        width: 100%;
        transform: none;
        box-shadow: none;
        -webkit-box-shadow: none;
    }
`

const CocktailImageSecond = styled(CocktailImage)`
    /* transform: rotateY(20deg); */
    /* -webkit-box-shadow: -5px 5px 15px 5px rgba(0,0,0,0.5); 
    box-shadow: -5px 5px 15px 5px rgba(0,0,0,0.5); */

    &:hover + ${Name} {
        opacity: 1;
    }

     @media screen and (max-width: 1200px) {
        width: 100%;
        transform: none;
        box-shadow: none;
        -webkit-box-shadow: none;
    }
`

const ImageBox = styled.div`
    padding-bottom: 30px;
    /* perspective: 1000px; */
`

const CocktailImageBig = styled(CocktailImage)`
    width: 450px;
    margin-top: 40px;
    transform: none;
    /* -webkit-box-shadow: 0px 5px 15px 5px rgba(0,0,0,0.5); 
    box-shadow: 0px 5px 15px 5px rgba(0,0,0,0.5); */

    &:hover + ${Name} {
        opacity: 1;
        
    }

    @media screen and (max-width: 1200px) {
        width: 100%;
        box-shadow: none;
        -webkit-box-shadow: none;
    }

    &:hover{
        transform: scale(1.01);
    }
`