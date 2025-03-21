'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { useState } from 'react'

const KidsContainer = styled.div`
  min-height: 100vh;
`

const HeroSection = styled.div`
  background-color: #2B1B58;
  padding: 4rem 0;
  color: white;
  text-align: center;
  background-image: url('/images/Kids Corner.png');
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(43, 27, 88, 0.7);
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
`

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 4rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ActivityCard = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-5px);
  }
`

const ActivityImage = styled.div`
  position: relative;
  height: 250px;
  background: #f5f5f5;
`

const ActivityInfo = styled.div`
  padding: 1.5rem;
  
  h3 {
    font-size: 1.5rem;
    color: #2B1B58;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`

const CategoryTab = styled.button<{ $isActive: boolean }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 2rem;
  background: ${props => props.$isActive ? '#2B1B58' : 'white'};
  color: ${props => props.$isActive ? 'white' : '#2B1B58'};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`

const AgeBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  background: #FF9800;
  color: white;
  margin-top: 0.5rem;
  display: inline-block;
`

const ActivityButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #2B1B58;
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: #3C2C69;
  }
`

const KidsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Activities' },
    { id: 'games', name: 'Games' },
    { id: 'crafts', name: 'Crafts' },
    { id: 'learning', name: 'Learning' },
    { id: 'coloring', name: 'Coloring' }
  ]

  const activities = [
    {
      name: "Bread Making Adventure",
      description: "Learn how bread is made through an interactive game! Follow the journey from wheat to delicious bread.",
      image: "/images/bread-making-game.png",
      ageRange: "Ages 6-12",
      category: "games",
      link: "/games/bread-making"
    },
    {
      name: "Baker's Math Challenge",
      description: "Fun math problems involving baking measurements and recipes. Perfect for learning while having fun!",
      image: "/images/math-game.png",
      ageRange: "Ages 8-12",
      category: "learning",
      link: "/games/math-challenge"
    },
    {
      name: "Decorate Your Cookie",
      description: "Use your creativity to decorate virtual cookies with different toppings and colors.",
      image: "/images/cookie-decorator.png",
      ageRange: "Ages 4-10",
      category: "games",
      link: "/games/cookie-decorator"
    },
    {
      name: "Bakery Coloring Book",
      description: "A collection of bakery-themed coloring pages featuring breads, pastries, and happy bakers!",
      image: "/images/coloring-book.png",
      ageRange: "Ages 3-10",
      category: "coloring",
      link: "/activities/coloring"
    },
    {
      name: "Kitchen Safety Quiz",
      description: "Learn about kitchen safety with our fun interactive quiz featuring animated characters.",
      image: "/images/safety-quiz.png",
      ageRange: "Ages 7-12",
      category: "learning",
      link: "/games/safety-quiz"
    },
    {
      name: "Bread Dough Crafts",
      description: "Create fun shapes and decorations using salt dough - a safe, non-edible dough for crafting!",
      image: "/images/dough-crafts.png",
      ageRange: "Ages 5-12",
      category: "crafts",
      link: "/activities/dough-crafts"
    },
    {
      name: "Memory Match Game",
      description: "Match pairs of delicious baked goods in this fun memory card game.",
      image: "/images/memory-game.png",
      ageRange: "Ages 4-10",
      category: "games",
      link: "/games/memory"
    },
    {
      name: "Sandwich Artist",
      description: "Create amazing sandwiches by stacking ingredients in this fun drag-and-drop game!",
      image: "/images/sandwich-artist.png",
      ageRange: "Ages 5-12",
      category: "games",
      link: "/games/sandwich-artist"
    }
  ]

  const filteredActivities = activeCategory === 'all'
    ? activities
    : activities.filter(activity => activity.category === activeCategory)

  return (
    <KidsContainer>
      <HeroSection>
        <Container>
          <Title>Kid's Corner</Title>
          <Subtitle>
            Welcome to the fun zone! Explore exciting games, activities, and learning adventures 
            all about baking and bread making. Let's have some fun while learning!
          </Subtitle>
        </Container>
      </HeroSection>

      <Container>
        <CategoryTabs>
          {categories.map(category => (
            <CategoryTab
              key={category.id}
              $isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </CategoryTab>
          ))}
        </CategoryTabs>

        <ActivitiesGrid>
          {filteredActivities.map((activity, index) => (
            <ActivityCard key={index}>
              <ActivityImage>
                <Image
                  src={activity.image}
                  alt={activity.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </ActivityImage>
              <ActivityInfo>
                <h3>{activity.name}</h3>
                <p>{activity.description}</p>
                <AgeBadge>{activity.ageRange}</AgeBadge>
                <ActivityButton href={activity.link}>
                  Start Activity →
                </ActivityButton>
              </ActivityInfo>
            </ActivityCard>
          ))}
        </ActivitiesGrid>
      </Container>
    </KidsContainer>
  )
}

export default KidsPage 