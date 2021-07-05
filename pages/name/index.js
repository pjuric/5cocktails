import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import Nav from '../../components/Nav'
import Results from '../../components/Results'
import Loading from '../../components/Loading'

function name() {

    const [search, setSearch] = useState('');
    const [cocktails, setCocktails] = useState('')
    const [loading, setLoading] = useState(true)
    const urlCocktails = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`

    const updateSearch = e => {
        setSearch(e.target.value);
      };

    async function fetchData() {
        const getCocktails = await axios.get(urlCocktails)
        setCocktails(getCocktails)
        setLoading(false)
        return getCocktails;
    }
    
    const getSearch = e => {
        e.preventDefault();
        fetchData();
        setSearch('');
    }

    return (
        <Container>
            <Nav/>
            <SearchContainer>
                <h2>Search Cocktails by Cocktail Name</h2>
                <form onSubmit={getSearch}>
                    <input 
                        type="text" 
                        placeholder="Cocktail Name" 
                        value={search}
                        onChange={updateSearch}
                        required="required"
                    />
                    <Button type="submit">Search</Button>
                </form>
            </SearchContainer>
            {loading ? 
                <></>
            :
                <Results cocktails={cocktails}/>
            }
        </Container>
    )
}

export default name

const Container = styled.div`
    background: #E47F23;
    width: 100vw;
    min-height: 100vh;

    h1{
        width: 100vw;
        text-align: center;
    }
`

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        color: #EAE8E9;
        margin-bottom: 15px;
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input{
        width: 400px;
        height: 40px;
        border-radius: 10px;
        border: none;
        outline: none;
        margin-bottom: 15px;
        padding: 5px;

        @media screen and (max-width: 800px) {
            width: 300px;
        }

        &:focus{
            border: none;
            outline: none;
        }
    }
`

const Button = styled.button`
    border-radius: 10px;
    background: #A2A3A0;
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
    margin-bottom: 30px;
    border: none; 
    outline: none;

    &:hover{
        background: #8E8F87;
    }
`