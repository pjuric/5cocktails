import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import axios from 'axios'
import { useRouter } from 'next/router';

function IngridientDetail({ingridient}) {

    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(true)
    const urlIngridients = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingridient}`

    const router = useRouter();
    const search = () => {
        router.push(`/search/ingredient/${details.data.ingredients[0].strIngredient}`)
    }

    useEffect(() => {
        async function fetchData() {
          const getDetails = await axios.get(urlIngridients)
          setDetails(getDetails)
          setLoading(false)
          return getDetails;
        }
        fetchData();
      }, [urlIngridients])

    return (
        <Container>
            {loading ? 
                <Loading/>
            :
              <Box>
                <h2>{details.data.ingredients[0].strIngredient}</h2>
                <Atributes>
                    {details.data.ingredients[0].strType &&
                        <h3>Type: {details.data.ingredients[0].strType}</h3>
                    }
                    {details.data.ingredients[0].strAlcohol &&
                        <h3>Alcoholic: {details.data.ingredients[0].strAlcohol}</h3>
                    }
                </Atributes>
                {details.data.ingredients[0].strDescription ?
                    <p>{details.data.ingredients[0].strDescription}</p>
                :
                    <p>No avaliable description</p>
                }
                <Button onClick={search}>{details.data.ingredients[0].strIngredient} Drinks</Button>
              </Box>
            }
        </Container>
    )
}

export default IngridientDetail

const Container = styled.div`
    
    
`

const Box = styled.div`
    background: #E5E5E7;
    border-radius: 10px;
    margin: 50px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 1000px) {
        p{
            padding: 0 25px;
        }
    }
`

const Atributes = styled.div`
    width: 400px;
    display: flex;
    justify-content: space-evenly;
    color: #5A4D32;
    margin: 15px 0;
`

const Button = styled.a`
    border-radius: 10px;
    background: #E47F23;
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
    margin-top: 15px;

    &:hover{
        background: rgba(228, 127, 35, 0.85);
    }
`