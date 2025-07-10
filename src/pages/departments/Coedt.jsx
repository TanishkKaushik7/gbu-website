import React from 'react'
import Hero from '../../components/departments/coedt/Hero'
import AboutCEDT from '../../components/departments/coedt/AboutCEDT'
import VcMessage from '../../components/departments/coedt/VcMessage'
import Mentors from '../../components/departments/coedt/Mentors'
import PartnersCarousel from '../../components/departments/coedt/PartnersCarousel'
import ProjectsSection from '../../components/departments/coedt/ProjectsSection'
import DroneCourseCard from '../../components/departments/coedt/DroneCourseCard'
import FacilitiesSwiper from '../../components/departments/coedt/FacilitiesSwiper'
import RecentTalks from '../../components/departments/coedt/RecentTalks'
import MediaCoverage from '../../components/departments/coedt/MediaCoverage'
import ContactUs from '../../components/departments/coedt/ContactUs'

const Coedt = () => {
  return (
    <div>
      <Hero/>
      <AboutCEDT/>
      <VcMessage/>
      <Mentors/>
      <PartnersCarousel/>
      <ProjectsSection/>
      <DroneCourseCard/>
      <FacilitiesSwiper/>
      <RecentTalks/>
      <MediaCoverage/>
      <ContactUs/>
    </div>
  )
}

export default Coedt
