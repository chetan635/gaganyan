import React from 'react'
import '../styles/PortfolioDescription.css'
import PortfolioDescriptionIntroduction from './PortfolioDescriptionIntroduction'

export default function PortfolioDescription() {
  return (
    <div className="PortfolioDescbody">
      <div className="leftPart">
        <PortfolioDescriptionIntroduction/>
      </div>
      <div className="rightPart">
        this is rightPart
      </div>
    </div>
  )
}
