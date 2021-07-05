import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Nav from '../../../../components/Nav'
import Loading from '../../../../components/Loading'
import Results from '../../../../components/Results'
import axios from 'axios';

function type() {

    const router = useRouter()
    const id = router.query.id
    const category = router.query.category

    const [cocktails, setCocktails] = useState('')
    const [loading, setLoading] = useState(true)
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${category}=${id}`

    useEffect(() => {
        async function fetchData() {
          const getCocktails = await axios.get(url)
          setCocktails(getCocktails)
          setLoading(false)
          return getCocktails;
        }
        fetchData();
      }, [url])

    return (
        <Container>
            {!loading ?
                <>
                    <Nav/>
                    <h1>{id}</h1>
                    <Results cocktails={cocktails}/>
                </>
            :
                <Loading/>
            }
            
        </Container>
    )
}

export default type

const Container = styled.div`
    background: #E47F23;
    width: 100vw;
    min-height: 100vh;

    h1{
        width: 100vw;
        text-align: center;
        margin-bottom: 30px;
        color: #EAE8E9;
    }
`