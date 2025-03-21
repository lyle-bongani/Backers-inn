'use client'

import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Factory from './components/Factory'
import Donation from './components/Donation'
import KidsCorner from './components/KidsCorner'
import Recipes from './components/Recipes'
import Newsletter from './components/Newsletter'
import styled from 'styled-components'

const MainContent = styled.main`
  /* Remove padding-top since it's handled by globals.css */
`

export default function Home() {
  return (
    <MainContent>
      <Hero />
      <About />
      <Products />
      <Factory />
      <Donation />
      <KidsCorner />
      <Recipes />
      <Newsletter />
    </MainContent>
  )
}
