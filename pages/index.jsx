import React from 'react'
import Layout from '../components/layout'
import TechnologiesSection from '../components/index/sections/technologies'
import AboutMeSection from '../components/index/sections/about_me'
import CVSection from '../components/index/sections/cv'
import ServicesSection from '../components/index/sections/services'
import ProjectsSection from '../components/index/sections/projects'
import SummarySection from '../components/index/sections/summary'
import BlogSection from '../components/index/sections/blog'
import ContactSection from '../components/index/sections/contact'
import LandingSection from '../components/index/sections/landing'
import ContactBannerSection from '../components/index/sections/contact_banner'
            
function IndexPage(props){
  return(
    <Layout>
      <LandingSection />
      <AboutMeSection />
      <TechnologiesSection />
      <CVSection />
      <ServicesSection />
      <ProjectsSection />
      <SummarySection />
      <BlogSection />
      <ContactBannerSection />
      <ContactSection />
    </Layout>
  )
}
export default IndexPage;