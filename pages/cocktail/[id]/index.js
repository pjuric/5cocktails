import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Nav from '../../../components/Nav'
import Loading from '../../../components/Loading'
import Buttons from '../../../components/Buttons'
import IngridientDetail from '../../../components/IngridientDetail'
import LocalDrinkIcon from '@material-ui/icons/LocalDrink'
import LocalBarIcon from '@material-ui/icons/LocalBar'
import CategoryIcon from '@material-ui/icons/Category'
import CloseIcon from '@material-ui/icons/Close'
import { useRouter } from 'next/router';
import axios from 'axios'

function cocktail() {
    
    const [click, setClick] = useState('')
    const router = useRouter();
    const {id} = router.query

    const [drink, setDrink] = useState([]);
    const [random, setRandom] = useState([])
    const [loading, setLoading] = useState(true)
    const urlDrink = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const urlRandom = `https://www.thecocktaildb.com/api/json/v1/1/random.php`

    useEffect(() => {
        const getDrink = () => axios.get(urlDrink)
        const getRandom = () => axios.get(urlRandom)
        async function fetchData() {
          const [drinkGet, randomGet] = await axios.all([getDrink(), getRandom()])
          setDrink(drinkGet.data.drinks[0])
          setRandom(randomGet.data.drinks[0])
          setLoading(false)
          return drinkGet;
        }
        fetchData();
      }, [urlDrink, urlRandom])


    function handleType(category, id) {
        router.push(`/type/${category}/${id}`)
    }

    function handleClick(cocktailName) {
        setClick(cocktailName)
    }

    function closeDetails() {
        setClick('')
    }

        return (
        <Container>
            {loading ?
                <Loading/>
            :
            <>
                <Nav/>
                <CocktailImage src={drink.strDrinkThumb}/>
                <Gradient/>
                <Details>
                    <Name>{drink.strDrink}</Name>
                    <Categories>
                        <Category>
                            <LocalDrinkIcon/>
                            <p onClick={() => handleType("a", drink.strAlcoholic)}>{drink.strAlcoholic}</p>
                        </Category>
                        <Category>
                            <LocalBarIcon/>
                            <p onClick={() => handleType("g", drink.strGlass)}>{drink.strGlass}</p>
                        </Category>
                        <Category>
                            <CategoryIcon/>
                            <p onClick={() => handleType("c", drink.strCategory)}>{drink.strCategory}</p>
                        </Category>
                    </Categories>
                    <Ingridients>
                        {drink.strIngredient1 && drink.strMeasure1 &&
                            <Ingridient>
                                <IngridientName onClick={() => handleClick(drink.strIngredient1)}>{drink.strIngredient1}</IngridientName>
                                <Measure>{drink.strMeasure1}</Measure>
                            </Ingridient>
                        }
                        {drink.strIngredient2 && drink.strMeasure2 &&
                            <Ingridient>
                                <IngridientName onClick={() => handleClick(drink.strIngredient2)}>{drink.strIngredient2}</IngridientName>
                                <Measure>{drink.strMeasure2}</Measure>
                            </Ingridient>
                        }
                        {drink.strIngredient3 && drink.strMeasure3 &&
                            <Ingridient>
                                <IngridientName  onClick={() => handleClick(drink.strIngredient3)}>{drink.strIngredient3}</IngridientName>
                                <Measure>{drink.strMeasure3}</Measure>
                            </Ingridient>
                        }
                        {drink.strIngredient4 && drink.strMeasure4 &&
                            <Ingridient>
                                <IngridientName onClick={() => handleClick(drink.strIngredient4)}>{drink.strIngredient4}</IngridientName>
                                <Measure>{drink.strMeasure4}</Measure>
                            </Ingridient>
                        }
                        {drink.strIngredient5 && drink.strMeasure5 &&
                            <Ingridient>
                                <IngridientName onClick={() => handleClick(drink.strIngredient5)}>{drink.strIngredient5}</IngridientName>
                                <Measure>{drink.strMeasure5}</Measure>
                            </Ingridient>
                        }
                        {drink.strIngredient6 && drink.strMeasure6 &&
                            <Ingridient>
                                <IngridientName onClick={() => handleClick(drink.strIngredient6)}>{drink.strIngredient6}</IngridientName>
                                <Measure>{drink.strMeasure6}</Measure>
                            </Ingridient>
                        }
                        {drink.strIngredient7 && drink.strMeasure7 &&
                            <Ingridient>
                                <IngridientName onClick={() => handleClick(drink.strIngredient7)}>{drink.strIngredient7}</IngridientName>
                                <Measure>{drink.strMeasure7}</Measure>
                            </Ingridient>
                        }
                        {drink.strIngredient8 && drink.strMeasure8 &&
                            <Ingridient>
                                <IngridientName onClick={() => handleClick(drink.strIngredient8)}>{drink.strIngredient8}</IngridientName>
                                <Measure>{drink.strMeasure8}</Measure>
                            </Ingridient>
                        }
                        {drink.strIngredient9 && drink.strMeasure9 &&
                            <Ingridient>
                                <IngridientName onClick={() => handleClick(drink.strIngredient9)}>{drink.strIngredient9}</IngridientName>
                                <Measure>{drink.strMeasure9}</Measure>
                            </Ingridient>
                        }
                        {drink.strIngredient10 && drink.strMeasure10 &&
                            <Ingridient>
                                <IngridientName onClick={() => handleClick(drink.strIngredient10)}>{drink.strIngredient10}</IngridientName>
                                <Measure>{drink.strMeasure10}</Measure>
                            </Ingridient>
                        }
                    </Ingridients>
                    <Description>
                        {drink.strInstructions}
                    </Description>
                    {/* <Other>
                        {drink.dateModified &&
                            <Year>
                                Added / updated: {drink.dateModified.slice(0,4)}.
                            </Year>
                        }
                        {drink.strTags &&
                            <Tags>
                                Tags: {drink.strTags}
                            </Tags>
                        }
                    </Other> */}
                <Buttons onClick={closeDetails} lucky={random.idDrink}/>
                </Details>
                {click && click.length > 0 &&
                    <OpenIngredient>
                        <Close onClick={closeDetails}/>
                        <IngridientDetail ingridient={click}/>
                    </OpenIngredient>
                }
            </>
            }
        </Container>
    )
}

export default cocktail

// export const getServerSideProps = async (context) =>{
//     const {id} = context.query
//     const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
//     const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
//     const drink = await res.json()
//     const random = await response.json()
//     return {
//         props: {
//             drink,
//             random
//         }
//     }   
// }

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;

    @media screen and (max-width: 1000px) {
        height: auto;
        background: #E47F23;
        z-index: 0;
        min-height: 100vh;
        padding-bottom: 30px;
    }
`

const CocktailImage = styled.img`
    z-index: -50;
    position: absolute;
    right: 0; 
    top: 0;
    height: 100%;
    background-repeat: no-repeat;

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: auto;
        position: absolute;
        top: 0;
    }
`

const Gradient = styled.div`
    z-index: -40;
    position: absolute;
    right: 0; 
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #E47F23 51%, rgba(225, 223, 224, 0.25) 100%);
    mix-blend-mode: normal;

    @media screen and (max-width: 1000px) {
        background: linear-gradient(0deg, #E47F23 51%, rgba(225, 223, 224, 0.25) 100%);
        height: 100vh;
        position: absolute;
        top: 0;
    }
`

const Details = styled.div`
    padding: 20px 50px;
    max-width: 45vw;

    @media screen and (max-width: 1000px) {
        width: 100%;
        padding: 0;
        max-width: none;
        padding-top: 40vh;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`

const Name = styled.p`
    color: #EAE8E9;
    font-size: 60px;
    font-weight: 800;
    margin-bottom: 15px;
    width: 100%;
    z-index: 10;

    @media screen and (max-width: 1000px) {
        font-size: 30px;
        width: auto;
    }
`

const Categories = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 15px;
`

const Category = styled.div`
    display: flex;
    align-items: center;
    color: #5A4D32;
    width: 33%;

    @media screen and (max-width: 1000px) {
            justify-content: center;
        }

    p{
        margin-left: 5px;
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;

        &:hover{
            color: black;
        }

        @media screen and (max-width: 1000px) {
            font-size: 17px;
            width: auto;
            justify-content: center;
        }
    }
`

const Ingridients = styled.div`
    margin-bottom: 15px;

    @media screen and (max-width: 1000px) {
        width: auto;
        text-align: left;
    }
`

const Ingridient = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: #C4C4C4;
    border-bottom: 2px solid #D44245;
    font-size: 19px;
    font-weight: 500;
`

const IngridientName = styled.p`
    color: #C4C4C4;
    margin-right: 20px;
    cursor: pointer;

    &:hover{
            color: white;
    }
`

const Measure = styled.p`
    color: #C4C4C4;
    margin-left: 10px;
`

const Description = styled.p`
    color: black;
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 500;
    width: auto;
    word-wrap: break-word;
    flex-wrap: wrap;
    overflow-wrap: break-word;
    z-index: 10;

    @media screen and (max-width: 1000px) {
            text-align: center;
            width: auto;
            padding: 0 10px;
        }
`

const Other = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin-bottom: 15px;
`

const Year = styled.p`

`

const Tags = styled.p`

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
    margin-bottom: 20px;

    &:hover{
        background: rgba(212, 66, 69, 0.85);
    }
`

const OpenIngredient = styled.div`
    background: #E5E5E7;
    position: absolute;
    z-index: 30;
    top: 50px;
    right: 50px;
    left: 50px;
    width: calc(100vw - 100px);
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;

    @media screen and (max-width: 1000px) {
        top: 50px;
        right: 10px;
        left: 10px;
        width: calc(100vw - 20px);
    }
`

const Close = styled(CloseIcon)`
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    z-index: 50;
    width: 50px;
`