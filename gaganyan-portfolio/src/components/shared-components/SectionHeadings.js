import React from 'react'
import '../../styles/shared-components-css/SectionHeadings.css'

export default function SectionHeadings(data) {
    return (
        <div className="heading-section" data-aos="fade-up">
            <div className="heading">{data.data.heading}</div>
            <div className="braker-line"></div>
        </div>
    )
}
