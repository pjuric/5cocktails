import React from 'react'
import styled from 'styled-components'
import LocalDrinkIcon from '@material-ui/icons/LocalDrink'

function Category({icon, detail}) {
    return (
        <Container>
            {icon}
            {detail}
        </Container>
    )
}

export default Category

const Container = styled.div`

`