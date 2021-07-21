import React from 'react'
import data from '../../constants'
import EducationItem from './EducationItem'

function Education(props) {
    return (
        <div className="education secInner">
            <h1># Education</h1>
            {data.education.map((item, index) => <EducationItem key={index} item={item} /> )}
        </div>
    )
}

export default Education
