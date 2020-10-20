import Head from 'next/head'

import styled from 'styled-components';

const Title = styled.h1`
color:red;
`

export default function Home() {
  return (
    <div className="h-screen w-full bg-red-200 flex justify-center items-center">
      <Title>Hola</Title>
    </div>
  )
}
