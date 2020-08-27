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
import Head from 'next/head'

const siteTitle = "Víctor García Rubio - AI/ML Fullstack Software Developer";

function IndexPage(props){
  return(
    <>
    <Head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <meta name="og:title" content={siteTitle}/>
      <meta name="Description" content="Victor Garcia Rubio, Fullstack Developer, DL specialist and DevOps enthusiastic. I have worked in end-to-end projects in AI. CI/CD, Docker and API development."/>
      <title>Victor Garcia Rubio | Fullstack Developer </title>
    </Head>
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
    </>
  )
}
export default IndexPage;