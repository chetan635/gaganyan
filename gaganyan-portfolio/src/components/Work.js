import React from 'react'
import '../styles/Work.css'
import SectionHeadings from './shared-components/SectionHeadings'

export default function Work() {
  const data = {
    heading: "Work"
  };
  return (
    <div id='work' className="work-section">
      <SectionHeadings data={data}/>
      <div className="work-section-title" data-aos="fade-up">
        <p>Here are some of my works.</p>
      </div>
      <div className="work-section-cards" data-aos="zoom-in">
        <div className="work-item">
            <img
                src='https://tse3.mm.bing.net/th?id=OIP._rdHB9LTODxUDFgl5QlfBAHaFQ&pid=Api&P=0'
                alt=''
                className="work-item-img"
            />
        </div>
        <div className="work-item">
            <img
                src='https://tse3.mm.bing.net/th?id=OIP._rdHB9LTODxUDFgl5QlfBAHaFQ&pid=Api&P=0'
                alt=''
                className="work-item-img"
            />
        </div>
        <div className="work-item">
            <img
                src='https://tse3.mm.bing.net/th?id=OIP._rdHB9LTODxUDFgl5QlfBAHaFQ&pid=Api&P=0'
                alt=''
                className="work-item-img"
            />
        </div>
      </div>
    </div>
  )
}
