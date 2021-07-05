import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import Loading from '../components/Loading'
import CocktailSection from '../components/CocktailSection'
import axios from 'axios'

function explore() {

    const [cocktail, setCocktail] = useState([])
    const [shot, setShot] = useState([])
    const [cocktailGlass, setCocktailGlass] = useState([])
    const [champagneFlute, setChampagneFlute] = useState([])
    const [highBallGlass, setHighballGlass] = useState([])
    const [ordinaryGlass, setOrdinaryGlass] = useState([])
    const [alcoholic, setAlcoholic] = useState([])
    const [nonAlcoholic, setNonAlcoholic] = useState([])
    const [loading, setLoading] = useState(true)

    const urlCocktail = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
    const urlShot = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Shot"
    const urlCocktailGlass = "https://thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass"
    const urlChampagneFlute = "https://thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute"
    const urlHighballGlass = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Highball%20glass"
    const urlOrdinaryGlass = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Old-fashioned%20glass"
    const urlAlcoholic = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
    const urlNonAlcoholic = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"

    useEffect(() => {
        const getCocktail = () => axios.get(urlCocktail)
        const getShot = () => axios.get(urlShot)
        const getCocktailGlass = () => axios.get(urlCocktailGlass)
        const getChampagneFlute = () => axios.get(urlChampagneFlute)
        const getHighballGlass = () => axios.get(urlHighballGlass)
        const getOrdinaryGlass = () => axios.get(urlOrdinaryGlass)
        const getAlcoholic = () => axios.get(urlAlcoholic)
        const getNonAlcoholic = () => axios.get(urlNonAlcoholic)
        async function fetchData() {
          const [cocktails, champagne, cocktailDrink, shotDrink, highball, ordinary, alcohol, nonAlcohol] = await axios.all([getCocktailGlass(), getChampagneFlute(), getCocktail(), getShot(), getHighballGlass(), getOrdinaryGlass(), getAlcoholic(), getNonAlcoholic()])
          setCocktailGlass(cocktails.data.drinks)
          setChampagneFlute(champagne.data.drinks)
          setCocktail(cocktailDrink.data.drinks)
          setShot(shotDrink.data.drinks)
          setHighballGlass(highball.data.drinks)
          setOrdinaryGlass(ordinary.data.drinks)
          setAlcoholic(alcohol.data.drinks)
          setNonAlcoholic(nonAlcohol.data.drinks)
          setLoading(false)
          return cocktail;
        }
        fetchData();
      }, [urlCocktailGlass, urlChampagneFlute, urlCocktail, urlShot, urlHighballGlass, urlAlcoholic, urlNonAlcoholic])

      const shuffledCocktailGlass = cocktailGlass.sort(() => 0.5 - Math.random()).slice(0, 3)
      const shuffledChampagneFlute = champagneFlute.sort(() => 0.5 - Math.random()).slice(0, 3)
      const shuffledCocktail = cocktail.sort(() => 0.5 - Math.random()).slice(0, 3)
      const shuffledShot = shot.sort(() => 0.5 - Math.random()).slice(0, 3)
      const shuffledHighballGlass = highBallGlass.sort(() => 0.5 - Math.random()).slice(0, 3)
      const shuffledOrdinaryGlass = ordinaryGlass.sort(() => 0.5 - Math.random()).slice(0, 3)
      const shuffledAlcoholic = alcoholic.sort(() => 0.5 - Math.random()).slice(0, 3)
      const shuffledNonAlcoholic = nonAlcoholic.sort(() => 0.5 - Math.random()).slice(0, 3)

    return (
        <Top>
            {loading ? <Loading/> :
                <Container>
                    <Nav/>
                    <CocktailSection glassC={shuffledAlcoholic} sectionName="Alcoholic" type="a"/>
                    <CocktailSection glassC={shuffledNonAlcoholic} sectionName="Non Alcoholic" type="a"/>
                    <CocktailSection glassC={shuffledCocktail} sectionName="Cocktail" type="c"/>
                    <CocktailSection glassC={shuffledShot} sectionName="Shot" type="c"/>
                    <CocktailSection glassC={shuffledCocktailGlass} sectionName="Cocktail Glass" type="g"/>
                    <CocktailSection glassC={shuffledChampagneFlute} sectionName="Champagne Flute" type="g"/>
                    <CocktailSection glassC={shuffledHighballGlass} sectionName="Highball Glass" type="g"/>
                    <CocktailSection glassC={shuffledOrdinaryGlass} sectionName="Old-fashioned glass" type="g"/>
                </Container>
            }
        </Top>
        
    )
}

export default explore

const Top = styled.div`
    max-width: 100vw;
`

const Container = styled.div`
    background: #D44245;
`