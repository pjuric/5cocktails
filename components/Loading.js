import React from 'react'
import styled from 'styled-components'
import { RotateCircleLoading } from 'react-loadingg';

function Loading() {

  return (
    <Container>
      <RotateCircleLoading size="large"/>
    </Container>
  )
}

export default Loading

const Container = styled.div`

`