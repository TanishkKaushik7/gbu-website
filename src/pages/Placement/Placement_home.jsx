import React from 'react'
import PlacementBrochure from './PlacementBrochure'
import InternshipProgrammes from './InternshipProgrammes'
import PlacementStatistics from './PlacementStatistics'
import TrainingCareerServices from './TrainingCareerServices'
import CampusRecruiters from './CampusRecruiters'

function Placement_home() {
  return (
    <div>
       <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Placement Cell</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
             Empowering students to excel with dynamic placement opportunities, strong industry collaborations, and a proven track record of success.
          </p>
        </div>
      </section>
      <PlacementBrochure/>
      <InternshipProgrammes/>
      <PlacementStatistics/>
      <TrainingCareerServices/>
      <CampusRecruiters/>
    </div>
  )
}

export default Placement_home
