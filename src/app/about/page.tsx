'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Timeline, 
  WheatIcon, 
  HeartIcon, 
  StarIcon, 
  MapIcon,
  LeafIcon,
  TeamIcon,
  TruckIcon,
  CertificateIcon,
  RecycleIcon
} from './Icons'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const AboutContainer = styled.div`
  overflow: hidden;
`

const HeroSection = styled.div`
  position: relative;
  height: 90vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;
`

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(43, 27, 88, 0.85), rgba(43, 27, 88, 0.75));
  z-index: 1;
`

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`

const Title = styled(motion.h1)`
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`

const Subtitle = styled(motion.p)`
  font-size: 2rem;
  opacity: 0.9;
  line-height: 1.6;
  margin: 0 auto;
  max-width: 700px;
  font-weight: 300;
`

const Section = styled.section<{ $alternate?: boolean }>`
  padding: 8rem 0;
  background-color: ${props => props.$alternate ? '#F8F9FA' : 'white'};
  position: relative;
  overflow: hidden;
`

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const SectionTitle = styled(motion.h2)`
  font-size: 3.5rem;
  color: #2B1B58;
  margin-bottom: 2rem;
  text-align: center;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const SectionSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #4A5568;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  line-height: 1.6;
`

const TimelineSection = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 2px;
    background: #E2E8F0;
  }
`

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  
  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin-bottom: 3rem;

    &:nth-child(even) {
      flex-direction: column;
    }
  }
`

const TimelineContent = styled.div`
  width: 45%;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);

  h3 {
    color: #2B1B58;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: #4A5568;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;
  }
`

const TimelineDot = styled.div`
  width: 20px;
  height: 20px;
  background: #C19A5B;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ValueCard = styled(motion.div)`
  background: white;
  padding: 3rem 2rem;
  border-radius: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  svg {
    width: 60px;
    height: 60px;
    margin: 0 auto 1.5rem;
    color: #C19A5B;
  }

  h3 {
    color: #2B1B58;
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  p {
    color: #4A5568;
    line-height: 1.7;
    font-size: 1.125rem;
  }
`

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled(motion.div)`
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);

  .image-container {
    position: relative;
    height: 250px;
    background: #f3f4f6;
  }

  .content {
    padding: 2rem;

    h3 {
      font-size: 1.5rem;
      color: #2B1B58;
      margin-bottom: 1rem;
    }

    p {
      color: #4A5568;
      line-height: 1.6;
    }
  }
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 4rem 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);

  h3 {
    font-size: 3rem;
    color: #C19A5B;
    margin-bottom: 0.5rem;
  }

  p {
    color: #4A5568;
    font-size: 1.125rem;
    font-weight: 500;
  }
`

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const TeamMember = styled(motion.div)`
  text-align: center;

  .image-container {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto 1.5rem;
    border-radius: 50%;
    overflow: hidden;
  }

  h3 {
    color: #2B1B58;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #4A5568;
    font-size: 1.125rem;
  }
`

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const TestimonialCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);

  p {
    color: #4A5568;
    font-size: 1.125rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .author {
    display: flex;
    align-items: center;
    gap: 1rem;

    .image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
    }

    .info {
      h4 {
        color: #2B1B58;
        font-size: 1.125rem;
        margin-bottom: 0.25rem;
      }

      span {
        color: #718096;
        font-size: 0.875rem;
      }
    }
  }
`

const AboutPage = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <HeroBackground />
        <Image
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
          alt="Baker's Inn Hero"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <HeroContent>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Baking Joy for Zimbabwe Since 1982
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Fresh, Wholesome, and Made with Pride
          </Subtitle>
        </HeroContent>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Story
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Born in Harare in 1982, we've grown from a small family bakery into Zimbabwe's leading bread manufacturer
          </SectionSubtitle>

          <TimelineSection>
            <TimelineItem
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <h3>1982</h3>
                <p>First Baker's Inn store opens in Harare</p>
              </TimelineContent>
              <TimelineDot />
            </TimelineItem>
            <TimelineItem
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <h3>1990</h3>
                <p>Expansion to major cities across Zimbabwe</p>
              </TimelineContent>
              <TimelineDot />
            </TimelineItem>
            <TimelineItem
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <h3>2005</h3>
                <p>Modern factory installation with state-of-the-art equipment</p>
              </TimelineContent>
              <TimelineDot />
            </TimelineItem>
            <TimelineItem
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <h3>2020</h3>
                <p>Reached milestone of 1 Million loaves baked daily</p>
              </TimelineContent>
              <TimelineDot />
            </TimelineItem>
          </TimelineSection>
        </Container>
      </Section>

      <Section $alternate>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why We Bake
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nourishing Families with Affordable, Quality Bread
          </SectionSubtitle>

          <ValuesGrid>
            <ValueCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <WheatIcon />
              <h3>Freshness Guaranteed Daily</h3>
              <p>Every loaf is baked fresh daily, ensuring you get the best quality bread for your family.</p>
            </ValueCard>
            <ValueCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <HeartIcon />
              <h3>Supporting Local Farmers</h3>
              <p>We partner with local wheat farmers to support our agricultural community.</p>
            </ValueCard>
            <ValueCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <StarIcon />
              <h3>Innovation in Every Bite</h3>
              <p>Constantly improving our recipes and processes to deliver the best baking experience.</p>
            </ValueCard>
          </ValuesGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Products
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Quality and variety to satisfy every taste
          </SectionSubtitle>

          <ProductsGrid>
            <ProductCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="image-container">
                <Image
                  src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2070&auto=format&fit=crop"
                  alt="Sunshine Bread"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="content">
                <h3>Sunshine Bread</h3>
                <p>Our signature soft and fresh white bread, perfect for any meal.</p>
              </div>
            </ProductCard>
            <ProductCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="image-container">
                <Image
                  src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2070&auto=format&fit=crop"
                  alt="Snack Pies"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="content">
                <h3>Snack Pies</h3>
                <p>Delicious savory pies made with premium ingredients.</p>
              </div>
            </ProductCard>
            <ProductCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="image-container">
              <Image
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2089&auto=format&fit=crop"
                  alt="Celebration Cakes"
                fill
                style={{ objectFit: 'cover' }}
              />
              </div>
              <div className="content">
                <h3>Celebration Cakes</h3>
                <p>Special occasion cakes that make every moment memorable.</p>
              </div>
            </ProductCard>
          </ProductsGrid>
        </Container>
      </Section>

      <Section $alternate>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Made in Zimbabwe, For Zimbabwe
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Supporting our local community through sustainable practices and employment
          </SectionSubtitle>

          <StatsGrid>
            <StatCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>500+</h3>
              <p>Local Jobs Created</p>
            </StatCard>
            <StatCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3>100%</h3>
              <p>Local Wheat Used</p>
            </StatCard>
            <StatCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3>50+</h3>
              <p>School Programs</p>
            </StatCard>
            <StatCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3>1M+</h3>
              <p>Lives Impacted</p>
            </StatCard>
          </StatsGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Baker's Inn Family
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Meet the passionate people behind your daily bread
          </SectionSubtitle>

          <TeamGrid>
            <TeamMember
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="image-container">
                <Image
                  src="https://images.unsplash.com/photo-1595475207225-428b62bda831?q=80&w=2000&auto=format&fit=crop"
                  alt="Head Baker"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>John Moyo</h3>
              <p>Head Baker</p>
            </TeamMember>
            <TeamMember
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="image-container">
                <Image
                  src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1974&auto=format&fit=crop"
                  alt="Quality Manager"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>Sarah Ndlovu</h3>
              <p>Quality Manager</p>
            </TeamMember>
            <TeamMember
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="image-container">
                <Image
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2080&auto=format&fit=crop"
                  alt="Production Manager"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>David Mutasa</h3>
              <p>Production Manager</p>
            </TeamMember>
            <TeamMember
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="image-container">
                <Image
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop"
                  alt="Innovation Chef"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>Grace Chigumba</h3>
              <p>Innovation Chef</p>
            </TeamMember>
          </TeamGrid>
        </Container>
      </Section>

      <Section $alternate>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Customer Love
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What our community says about us
          </SectionSubtitle>

          <TestimonialGrid>
            <TestimonialCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p>"Baker's Inn bread has been my family's daily bread for over 10 years. The quality never disappoints!"</p>
              <div className="author">
                <div className="image">
                  <Image
                    src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop"
                    alt="Customer"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="info">
                  <h4>Maria Chikwanha</h4>
                  <span>Loyal Customer</span>
                </div>
              </div>
            </TestimonialCard>
            <TestimonialCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p>"As a restaurant owner, I trust Baker's Inn for consistent quality and reliable delivery. They're the best!"</p>
              <div className="author">
                <div className="image">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
                    alt="Customer"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="info">
                  <h4>James Sibanda</h4>
                  <span>Restaurant Owner</span>
                </div>
              </div>
            </TestimonialCard>
            <TestimonialCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p>"Their commitment to quality and community support makes them more than just a bakery - they're family!"</p>
              <div className="author">
                <div className="image">
              <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop"
                    alt="Customer"
                fill
                style={{ objectFit: 'cover' }}
              />
                </div>
                <div className="info">
                  <h4>Ruth Makoni</h4>
                  <span>Community Leader</span>
                </div>
              </div>
            </TestimonialCard>
          </TestimonialGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Sustainability Promise
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Building a better future for Zimbabwe
          </SectionSubtitle>

          <ValuesGrid>
            <ValueCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <RecycleIcon />
              <h3>Zero Waste by 2030</h3>
              <p>Committed to reducing our environmental impact through sustainable practices.</p>
            </ValueCard>
            <ValueCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <LeafIcon />
              <h3>Eco-Friendly Packaging</h3>
              <p>Transitioning to biodegradable packaging solutions.</p>
            </ValueCard>
            <ValueCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TeamIcon />
              <h3>Community Clean-up</h3>
              <p>Regular initiatives to keep our communities clean and green.</p>
            </ValueCard>
          </ValuesGrid>
        </Container>
      </Section>
    </AboutContainer>
  )
}

export default AboutPage 