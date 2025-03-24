'use client'

import styled from 'styled-components'
import { useState } from 'react'
import { 
  Phone,
  WhatsApp,
  Email,
  AccessTime,
  Business,
  ShoppingCart,
  LocationOn,
  Send,
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Help,
  Work,
  Newspaper,
  VolunteerActivism,
  CheckCircle,
  ArrowForward
} from '@mui/icons-material'

const ContactContainer = styled.div`
  min-height: 100vh;
  background: #FAF7F2;
`

const HeroSection = styled.div`
  background: linear-gradient(rgba(43, 27, 88, 0.8), rgba(43, 27, 88, 0.8)),
              url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2070&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 6rem 0;
  text-align: center;
  position: relative;
`

const Container = styled.div`
  width: 95%;
  max-width: 95%;
  margin: 0 auto;
  padding: 0;
  position: relative;
  z-index: 2;
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
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
  line-height: 1.6;
`

const Section = styled.section`
  padding: 4rem 0;
  background: white;
  margin-bottom: 2rem;
  width: 100%;
`

const SectionContent = styled.div`
  width: 95%;
  max-width: 95%;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const ContactCard = styled.div<{ $bgImage?: string }>`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 150px;
    background-image: ${props => props.$bgImage ? `url(${props.$bgImage})` : 'none'};
    background-size: cover;
    background-position: center;
    opacity: 0.1;
  }

  &:hover {
    transform: translateY(-5px);
  }
`

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #2B1B58;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #C19A5B;
  }
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
  color: #666;
  font-size: 1.1rem;

  svg {
    color: #2B1B58;
    font-size: 1.4rem;
  }
`

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #C19A5B;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: #A88347;
    transform: translateY(-2px);
  }
`

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #2B1B58;
    font-weight: 500;
  }

  input, textarea, select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #2B1B58;
      box-shadow: 0 0 0 2px rgba(43, 27, 88, 0.1);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1.5rem 0;
  color: #666;
`

const SubmitButton = styled.button`
  background: #2B1B58;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: #3C2C69;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
`

const SocialIcon = styled.a`
  color: #2B1B58;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #C19A5B;
    transform: translateY(-2px);
  }
`

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const FAQItem = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`

const ProcessStep = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #666;

  svg {
    color: #C19A5B;
  }
`

const MobileCallButton = styled.a`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #C19A5B;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  z-index: 1000;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: #A88347;
  }

  @media (min-width: 769px) {
    display: none;
  }
`

const MapFormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 4rem auto;
  width: 95%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const MapSection = styled.div`
  height: 600px;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`

const ContactDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 2rem;
  background: #FAF7F2;
  padding: 3rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2070&auto=format&fit=crop');
    background-size: cover;
    background-position: center;
    opacity: 0.1;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
  }
`

const ContactGroup = styled.div`
  h3 {
    color: #2B1B58;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
    font-weight: 600;
  }
`

const ThreeColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setShowSuccess(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      consent: false
    })

    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <ContactContainer>
      <HeroSection>
        <Container>
          <Title>We're Here to Hear from You!</Title>
          <Subtitle>Whether you're a customer, partner, or future franchisee—let's connect!</Subtitle>
        </Container>
      </HeroSection>

      <Container>
        <Section>
          <SectionTitle>
            <Phone /> Contact Options
          </SectionTitle>
          <ContactGrid>
            <ContactCard $bgImage="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2070&auto=format&fit=crop">
              <CardTitle>
                <Phone /> Customer Care
              </CardTitle>
              <ContactItem>
                <Phone /> +263 XXX XXX XXX
              </ContactItem>
              <ContactItem>
                <WhatsApp /> Chat with Us
              </ContactItem>
              <ContactItem>
                <Email /> care@bakersinn.co.zw
              </ContactItem>
              <ContactItem>
                <AccessTime /> Mon–Sat: 8 AM – 5 PM CAT
              </ContactItem>
            </ContactCard>

            <ContactCard $bgImage="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2070&auto=format&fit=crop">
              <CardTitle>
                <Business /> Franchise Inquiries
              </CardTitle>
              <ContactItem>
                <Email /> franchise@bakersinn.co.zw
              </ContactItem>
              <Button href="#">
                <ArrowForward /> Download Franchise Kit PDF
              </Button>
            </ContactCard>

            <ContactCard $bgImage="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop">
              <CardTitle>
                <ShoppingCart /> Wholesale & Bulk Orders
              </CardTitle>
              <ContactItem>
                <Phone /> +263 XXX XXX XXX
              </ContactItem>
              <Button href="#">
                <ArrowForward /> Request a Quote
              </Button>
            </ContactCard>
          </ContactGrid>
        </Section>

        <Section>
          <SectionTitle>
            <LocationOn /> Office Locations
          </SectionTitle>
          <SectionContent>
            <ContactDetails>
              <ContactGroup>
                <h3>Address</h3>
                <ContactItem>
                  <LocationOn /> 1 Sheperton Road,
                </ContactItem>
                <ContactItem>
                  <LocationOn /> Graniteside,
                </ContactItem>
                <ContactItem>
                  <LocationOn /> Harare,
                </ContactItem>
                <ContactItem>
                  <LocationOn /> Zimbabwe
                </ContactItem>
              </ContactGroup>
              <ContactGroup>
                <h3>Get In Touch With Us</h3>
                <ContactItem>
                  <Phone /> 08080151
                </ContactItem>
                <ContactItem>
                  <Phone /> 08080152
                </ContactItem>
                <ContactItem>
                  <Phone /> +263 242 751 481
                </ContactItem>
                <ContactItem>
                  <Phone /> +263 242 710 334
                </ContactItem>
                <ContactItem>
                  <Email /> marketing@bakersinnzim.com
                </ContactItem>
              </ContactGroup>
            </ContactDetails>
          </SectionContent>
          <MapFormContainer>
            <MapSection>
              <MapIframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.1573754627357!2d31.054558800000006!3d-17.831256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e7c49320df%3A0xf4d0636a76f07272!2sBakers%20Inn%20105%20R%20G%20Mugabe!5e0!3m2!1sen!2szw!4v1742568522606!5m2!1sen!2szw"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </MapSection>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="subject">Subject*</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="product-feedback">Product Feedback</option>
                  <option value="complaint">Complaint</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </FormGroup>

              <FormGroup>
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <CheckboxGroup>
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="consent">I agree to Bakers Inn's Privacy Policy</label>
              </CheckboxGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send →'}
              </SubmitButton>
            </Form>
          </MapFormContainer>
          <SectionContent>
            <ContactItem>
              <AccessTime /> Walk-ins welcome at our head office Mon–Fri
            </ContactItem>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>
            <Send /> Join Our Community
          </SectionTitle>
          <SocialLinks>
            <SocialIcon href="https://facebook.com" target="_blank">
              <Facebook />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank">
              <Instagram />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank">
              <Twitter />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank">
              <LinkedIn />
            </SocialIcon>
          </SocialLinks>
          <p style={{ textAlign: 'center', color: '#666' }}>
            Share your Bakers Inn moments with #BakersInnZim
          </p>
        </Section>

        <Section>
          <SectionTitle>
            <Help /> Quick Answers
          </SectionTitle>
          <FAQGrid>
            <FAQItem>
              <h3>Where can I find Bakers Inn products near me?</h3>
              <p>Use our store locator to find the nearest Bakers Inn outlet.</p>
            </FAQItem>
            <FAQItem>
              <h3>How do I track my bulk order?</h3>
              <p>Contact our bulk orders team with your order number.</p>
            </FAQItem>
            <FAQItem>
              <h3>Are your products halal-certified?</h3>
              <p>Yes, all our products are halal-certified.</p>
            </FAQItem>
            <FAQItem>
              <h3>What's your return policy?</h3>
              <p>We offer a 24-hour satisfaction guarantee on all products.</p>
            </FAQItem>
          </FAQGrid>
        </Section>

        <Section>
          <SectionTitle>
            <CheckCircle /> Your Voice Matters
          </SectionTitle>
          <ContactCard>
            <ProcessStep>
              <Phone /> Step 1: Call/Email Us
            </ProcessStep>
            <ProcessStep>
              <CheckCircle /> Step 2: We'll Acknowledge Within 2 Hours
            </ProcessStep>
            <ProcessStep>
              <CheckCircle /> Step 3: Resolution in 48 Hours
            </ProcessStep>
            <p style={{ marginTop: '1rem', color: '#666' }}>
              Every complaint helps us improve
            </p>
          </ContactCard>
        </Section>

        <Section>
          <SectionTitle>
            <Work /> Careers, Press & Partnerships
          </SectionTitle>
          <ThreeColumnGrid>
            <ContactCard>
              <h3>Open Positions</h3>
              <ContactItem>
                <Work /> Sales Manager
              </ContactItem>
              <ContactItem>
                <Work /> Bakery Staff
              </ContactItem>
              <Button href="#">
                <ArrowForward /> Apply Now
              </Button>
            </ContactCard>

            <ContactCard>
              <h3>Press & Media</h3>
              <ContactItem>
                <Email /> media@bakersinn.co.zw
              </ContactItem>
              <Button href="#">
                <ArrowForward /> Download Media Kit
              </Button>
            </ContactCard>

            <ContactCard>
              <h3>CSR Partnerships</h3>
              <ContactItem>
                <Email /> impact@bakersinn.co.zw
              </ContactItem>
              <p style={{ marginTop: '1rem', color: '#666' }}>
                Partner with us to empower Zimbabwe
              </p>
            </ContactCard>
          </ThreeColumnGrid>
        </Section>

      </Container>

      <MobileCallButton href="tel:+263XXXXXXXXX">
        <Phone />
      </MobileCallButton>
    </ContactContainer>
  )
}

export default ContactPage 