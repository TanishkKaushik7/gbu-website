import React from 'react'
import Hero from '../../components/departments/raem/Hero'
import AboutRAEM from '../../components/departments/raem/AboutRAEM'
import VcMessage from '../../components/departments/raem/VcMessage'
import FunctionalAreasSwiper from '../../components/departments/raem/FunctionalAreasSwiper'
import CoursesOffered from '../../components/departments/raem/CourseOffered'
import EventGallery from '../../components/departments/raem/EventGallery'
import ContactUs from '../../components/departments/raem/ContactUs'

const Raem = () => {
  return (
    <div>
      <Hero/>
      <AboutRAEM/>
      <VcMessage/>
      <FunctionalAreasSwiper/>
      <CoursesOffered/>
      <EventGallery/>
      <ContactUs/>
    </div>
  )
}

export default Raem
