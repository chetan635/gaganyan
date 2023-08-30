import React from 'react'
import '../styles/Resume.css'
import SectionHeadings from './shared-components/SectionHeadings'
import resumeData from "../data/resume-data.json"

export default function Resume() {
  const data = {
    heading: "Resume"
  };
  return (
    <div id='resume' className="resume-body">
      <SectionHeadings data={data}/>
      <div className="resume-subtitle" data-aos="fade-up">
        <p>Here are my experiences and qualifications.</p>
      </div>
      <div className="resume-description">
        <div className="resume-description-experience" data-aos="zoom-in">
            <div className="resume-description-experience-title">
                <span className='tag-design'>Experience</span>
            </div>
            <div className="resume-description-experience-summary-section">
                <div className='vertical-bar-body'>
                    <div className="vartical-bar-round1"></div>
                    <div className="vertical-bar-parent">
                        <div className="vertical-bar mr-x-2"></div>
                    </div>
                    <div className="vartical-bar-round2"></div>
                </div>
                <div className="resume-description-experience-summary">
                    <h3 className='resume-description-experience-summary-title'>{resumeData.resumeData.positions[0].role}</h3>
                    <span className='resume-description-experience-summary-company'>{resumeData.resumeData.positions[0].duration}</span>
                    <span className='resume-description-experience-summary-duration'>{resumeData.resumeData.positions[0].institute}</span>
                    <span className='resume-description-experience-summary-info'>{resumeData.resumeData.positions[0].description}</span>
                </div>
            </div>
        </div>
        <div className="resume-description-experience" data-aos="zoom-in">
            <div className="resume-description-experience-title">
                <span className='tag-design'>Experience</span>
            </div>
            <div className="resume-description-experience-summary-section">
                <div className='vertical-bar-body'>
                    <div className="vartical-bar-round1"></div>
                    <div className="vertical-bar-parent">
                        <div className="vertical-bar mr-x-2"></div>
                    </div>
                    <div className="vartical-bar-round2"></div>
                </div>
                <div className="resume-description-experience-summary">
                    <h3 className='resume-description-experience-summary-title'>{resumeData.resumeData.positions[1].role}</h3>
                    <span className='resume-description-experience-summary-company'>{resumeData.resumeData.positions[1].duration}</span>
                    <span className='resume-description-experience-summary-duration'>{resumeData.resumeData.positions[1].institute}</span>
                    <span className='resume-description-experience-summary-info'>{resumeData.resumeData.positions[1].description}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
