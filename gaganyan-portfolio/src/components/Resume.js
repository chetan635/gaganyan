import React from 'react'
import '../styles/Resume.css'
import SectionHeadings from './shared-components/SectionHeadings'

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
                    <h3 className='resume-description-experience-summary-title'>Software Developer</h3>
                    <span className='resume-description-experience-summary-company'>Relatient</span>
                    <span className='resume-description-experience-summary-duration'>June 2022 - Present</span>
                    <span className='resume-description-experience-summary-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quo. Nulla id velit amet provident, placeat pariatur maiores laborum delectus cum eveniet necessitatibus fugiat blanditiis praesentium vitae at minus eligendi?</span>
                </div>
            </div>
        </div>
        <div className="resume-description-experience" data-aos="zoom-in">
            <div className="resume-description-experience-title">
                <span className='tag-design'>Education</span>
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
                    <h3 className='resume-description-experience-summary-title'>Btech, Computer Science</h3>
                    <span className='resume-description-experience-summary-company'>VIIT Pune</span>
                    <span className='resume-description-experience-summary-duration'>Aug 2018 - May 2022</span>
                    <span className='resume-description-experience-summary-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quo. Nulla id velit amet provident, placeat pariatur maiores laborum delectus cum eveniet necessitatibus fugiat blanditiis praesentium vitae at minus eligendi?</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
