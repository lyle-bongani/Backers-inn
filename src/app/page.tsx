'use client'

import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

// Import components
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Recipes from './components/Recipes'
import KidsCorner from './components/KidsCorner'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

const Main = styled.main`
  min-height: 100vh;
  background: #FAFAFA;
`

const HomePage = () => {
  return (
    <Main>
      <Hero />
      <About />
      <Products />
      <Recipes />
      <KidsCorner />
      <Newsletter />
      <Footer />
    </Main>
  )
}

export default HomePage
