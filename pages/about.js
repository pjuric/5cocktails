import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'

function about() {
    return (
        <Container>
            <Nav/>
            <AboutContainer>
                <h1>About</h1>
                <p>
                    This web app is made in educational, practice and entertainment purposes and is not of marketing, commercial or business use.<br/>
                    Main options in this web app are:
                </p>
                    <ul>
                        <li>-   Random Drink Generation</li>
                        <li>-   Drink Search by Drink Name</li>
                        <li>-   Drink Search by Ingredient Name</li>
                        <li>-   Drink Details Insight</li>
                        <li>-   Ingredient Details Insight</li>
                        <li>-   Filtering Drinks by Categories, Glass Types and Alcoholic</li>
                    </ul>
                <h1>Credits</h1>
                <h3>
                    <ul>
                        <li>-   <a target="_blank" href="https://www.thecocktaildb.com/">The Cocktail DB</a> (API)</li>
                        <li>-   <a target="_blank" href="https://www.pexels.com/photo/glass-with-cocktail-with-lemon-and-rosemary-placed-on-table-5947027/">Pexels</a> (Landing Page Image)</li>
                        <li>-   <a target="_blank" href="https://material-ui.com/">Material UI</a> (Icons)</li>
                        <li>-   <a target="_blank" href="https://styled-components.com/">Styled Components</a> (Styling)</li>
                    </ul>
                </h3>
                <a target="_blank" href="https://www.thecocktaildb.com/"><img src="https://www.thecocktaildb.com/images/logo.png"/></a>
            </AboutContainer>
        </Container>
    )
}

export default about

const Container = styled.div`
    background: #D44245;
    width: 100vw;
    min-height: 100vh;
`

const AboutContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    h1{
        color: #EAE8E9;
        border-bottom: 2px solid #E47F23;
        margin-bottom: 10px;
    }

    p, h3{
        color: #EAE8E9;
        margin-bottom: 30px;

        a{
            color:  #EAE8E9;
            text-decoration: none;
            font-weight: 700;

            &:hover{
                color: white;
            }
        }
    }

    p{
        padding: 0 10px;
    }

    ul{
        color:  #EAE8E9;
        margin-bottom: 20px;
    }
`