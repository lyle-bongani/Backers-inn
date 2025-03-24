'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { useState } from 'react'
import { 
  Build,
  SportsEsports,
  OutdoorGrill,
  School,
  TheaterComedy,
  Palette,
  EmojiEvents,
  VolunteerActivism,
  Print,
  FilterList,
  Info
} from '@mui/icons-material'

const KidsContainer = styled.div`
  min-height: 100vh;
  background: #FAF7F2;
`

const HeroSection = styled.div`
  background-color: #2B1B58;
  padding: 4rem 0;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(43, 27, 88, 0.8), rgba(43, 27, 88, 0.8)),
                url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2070&auto=format&fit=crop');
    background-size: cover;
    background-position: center;
    z-index: 1;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.5rem;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`

const Section = styled.section`
  padding: 4rem 0;
  background: white;
  margin-bottom: 2rem;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #2B1B58;
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    color: #C19A5B;
  }
`

const ActivityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const ActivityCard = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const ActivityImage = styled.div`
  position: relative;
  height: 200px;
  background: #f5f5f5;
`

const ActivityContent = styled.div`
  padding: 1.5rem;
`

const ActivityTitle = styled.h3`
  font-size: 1.5rem;
  color: #2B1B58;
  margin-bottom: 1rem;
`

const ActivityDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`

const ProTip = styled.div`
  background: #F0F7FF;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #2B1B58;
  }
`

const AgeFilter = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`

const AgeButton = styled.button<{ $active?: boolean }>`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.$active ? '#C19A5B' : '#E5E7EB'};
  border-radius: 2rem;
  background: ${props => props.$active ? '#C19A5B' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#666'};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #C19A5B;
    transform: translateY(-2px);
  }
`

const ParentZone = styled.div`
  background: #FFF6E5;
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 2rem;
`

const SafetyTip = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
  color: #666;

  svg {
    color: #C19A5B;
  }
`

const KidsPage = () => {
  const [activeAge, setActiveAge] = useState('all')

  const ageGroups = [
    { id: 'all', name: 'All Ages' },
    { id: '3-5', name: 'Ages 3-5' },
    { id: '6-9', name: 'Ages 6-9' },
    { id: '10+', name: 'Ages 10+' }
  ]

  const activities = [
    // Creative Play Zone
    {
      title: "Build a Cardboard City",
      description: "Transform cardboard boxes into a miniature city with buildings, roads, and parks.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
      proTip: "Use markers, stickers, and recycled materials to decorate your city.",
      ageGroup: "6-9",
      section: "creative"
    },
    {
      title: "DIY Board Game Creation",
      description: "Design your own board game using paper, markers, and household items.",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2070&auto=format&fit=crop",
      proTip: "Create unique game pieces using bottle caps or small toys.",
      ageGroup: "6-9",
      section: "creative"
    },
    // Outdoor Challenges
    {
      title: "Nature Scavenger Hunt",
      description: "Create a list of items to find in nature and explore your surroundings.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2070&auto=format&fit=crop",
      proTip: "Include items like leaves, rocks, and flowers of different colors.",
      ageGroup: "3-5",
      section: "outdoor"
    },
    {
      title: "Obstacle Course Challenge",
      description: "Set up an obstacle course using household items and garden equipment.",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2070&auto=format&fit=crop",
      proTip: "Use hula hoops, cones, and jump ropes for various challenges.",
      ageGroup: "6-9",
      section: "outdoor"
    },
    // Educational Games
    {
      title: "Math Treasure Hunt",
      description: "Solve math problems to find hidden clues around the house.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2070&auto=format&fit=crop",
      proTip: "Create different difficulty levels for various age groups.",
      ageGroup: "6-9",
      section: "educational"
    },
    {
      title: "Word Building Challenge",
      description: "Use letter cards or Scrabble tiles to create words and learn vocabulary.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
      proTip: "Start with simple words and gradually increase difficulty.",
      ageGroup: "6-9",
      section: "educational"
    },
    // Storytelling & Roleplay
    {
      title: "Adventure Story Creation",
      description: "Create an interactive story where kids make choices and shape the narrative.",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2070&auto=format&fit=crop",
      proTip: "Use props and costumes to make the story more engaging.",
      ageGroup: "6-9",
      section: "storytelling"
    },
    {
      title: "Pretend Play Restaurant",
      description: "Set up a pretend restaurant with menus, play food, and role-playing.",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2070&auto=format&fit=crop",
      proTip: "Create a simple menu and let kids take turns being chef and customer.",
      ageGroup: "3-5",
      section: "storytelling"
    },
    // Craft & Recycling Projects
    {
      title: "Recycled Art Creation",
      description: "Create artwork using recycled materials like paper, plastic, and cardboard.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2070&auto=format&fit=crop",
      proTip: "Collect materials throughout the week for a weekend art project.",
      ageGroup: "6-9",
      section: "craft"
    },
    {
      title: "DIY Musical Instruments",
      description: "Make musical instruments from household items and create a family band.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
      proTip: "Use rice in containers for shakers and rubber bands for string instruments.",
      ageGroup: "6-9",
      section: "craft"
    },
    // Family Baking Competitions
    {
      title: "Creative Sandwich Challenge",
      description: "Create the most imaginative sandwich using various ingredients.",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2070&auto=format&fit=crop",
      proTip: "Use cookie cutters to create fun shapes.",
      ageGroup: "6-9",
      section: "baking"
    },
    {
      title: "Cookie Decorating Contest",
      description: "Decorate cookies with icing, sprinkles, and other toppings.",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2070&auto=format&fit=crop",
      proTip: "Create different themes for each round of decoration.",
      ageGroup: "3-5",
      section: "baking"
    }
  ]

  const filteredActivities = activeAge === 'all'
    ? activities
    : activities.filter(activity => activity.ageGroup === activeAge)

  return (
    <KidsContainer>
      <HeroSection>
        <Container>
          <Title>Playful Bakers Inn Adventures – No Screen Needed!</Title>
          <Subtitle>Turn Bakers Inn Treats into Family Fun!</Subtitle>
        </Container>
      </HeroSection>

      <Container>
        <AgeFilter>
          {ageGroups.map(age => (
            <AgeButton
              key={age.id}
              $active={activeAge === age.id}
              onClick={() => setActiveAge(age.id)}
            >
              {age.name}
            </AgeButton>
          ))}
        </AgeFilter>

        <Section>
          <SectionTitle>
            <Build /> Creative Play Zone
          </SectionTitle>
          <ActivityGrid>
            {filteredActivities
              .filter(activity => activity.section === 'creative')
              .map((activity, index) => (
                <ActivityCard key={index}>
                  <ActivityImage>
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </ActivityImage>
                  <ActivityContent>
                    <ActivityTitle>{activity.title}</ActivityTitle>
                    <ActivityDescription>{activity.description}</ActivityDescription>
                    <ProTip>
                      <Info /> {activity.proTip}
                    </ProTip>
                  </ActivityContent>
                </ActivityCard>
              ))}
          </ActivityGrid>
        </Section>

        <Section>
          <SectionTitle>
            <OutdoorGrill /> Outdoor Challenges
          </SectionTitle>
          <ActivityGrid>
            {filteredActivities
              .filter(activity => activity.section === 'outdoor')
              .map((activity, index) => (
                <ActivityCard key={index}>
                  <ActivityImage>
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </ActivityImage>
                  <ActivityContent>
                    <ActivityTitle>{activity.title}</ActivityTitle>
                    <ActivityDescription>{activity.description}</ActivityDescription>
                    <ProTip>
                      <Info /> {activity.proTip}
                    </ProTip>
                  </ActivityContent>
                </ActivityCard>
              ))}
          </ActivityGrid>
        </Section>

        <Section>
          <SectionTitle>
            <School /> Educational Games
          </SectionTitle>
          <ActivityGrid>
            {filteredActivities
              .filter(activity => activity.section === 'educational')
              .map((activity, index) => (
                <ActivityCard key={index}>
                  <ActivityImage>
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </ActivityImage>
                  <ActivityContent>
                    <ActivityTitle>{activity.title}</ActivityTitle>
                    <ActivityDescription>{activity.description}</ActivityDescription>
                    <ProTip>
                      <Info /> {activity.proTip}
                    </ProTip>
                  </ActivityContent>
                </ActivityCard>
              ))}
          </ActivityGrid>
        </Section>

        <Section>
          <SectionTitle>
            <TheaterComedy /> Storytelling & Roleplay
          </SectionTitle>
          <ActivityGrid>
            {filteredActivities
              .filter(activity => activity.section === 'storytelling')
              .map((activity, index) => (
                <ActivityCard key={index}>
                  <ActivityImage>
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </ActivityImage>
                  <ActivityContent>
                    <ActivityTitle>{activity.title}</ActivityTitle>
                    <ActivityDescription>{activity.description}</ActivityDescription>
                    <ProTip>
                      <Info /> {activity.proTip}
                    </ProTip>
                  </ActivityContent>
                </ActivityCard>
              ))}
          </ActivityGrid>
        </Section>

        <Section>
          <SectionTitle>
            <Palette /> Craft & Recycling Projects
          </SectionTitle>
          <ActivityGrid>
            {filteredActivities
              .filter(activity => activity.section === 'craft')
              .map((activity, index) => (
                <ActivityCard key={index}>
                  <ActivityImage>
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </ActivityImage>
                  <ActivityContent>
                    <ActivityTitle>{activity.title}</ActivityTitle>
                    <ActivityDescription>{activity.description}</ActivityDescription>
                    <ProTip>
                      <Info /> {activity.proTip}
                    </ProTip>
                  </ActivityContent>
                </ActivityCard>
              ))}
          </ActivityGrid>
        </Section>

        <Section>
          <SectionTitle>
            <EmojiEvents /> Family Baking Competitions
          </SectionTitle>
          <ActivityGrid>
            {filteredActivities
              .filter(activity => activity.section === 'baking')
              .map((activity, index) => (
                <ActivityCard key={index}>
                  <ActivityImage>
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </ActivityImage>
                  <ActivityContent>
                    <ActivityTitle>{activity.title}</ActivityTitle>
                    <ActivityDescription>{activity.description}</ActivityDescription>
                    <ProTip>
                      <Info /> {activity.proTip}
                    </ProTip>
                  </ActivityContent>
                </ActivityCard>
              ))}
          </ActivityGrid>
        </Section>

        <ParentZone>
          <SectionTitle>
            <Info /> Parent Zone
          </SectionTitle>
          <SafetyTip>
            <Info /> Always supervise play with small food pieces.
          </SafetyTip>
          <SafetyTip>
            <Info /> Use allergy-friendly ingredients for edible games.
          </SafetyTip>
          <SafetyTip>
            <Info /> Share photos of gameplay for monthly prizes.
          </SafetyTip>
        </ParentZone>
      </Container>
    </KidsContainer>
  )
}

export default KidsPage 