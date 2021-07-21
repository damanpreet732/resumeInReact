import React from 'react'

function EducationItem(props) {
    return (
        <div className="educationItem item">
            {props.item.course && <h2>{props.item.course} ( {props.item.finalGrade} )</h2>}
            {props.item.campus && <h3>{props.item.campus}</h3>}
            {props.item.timespan && <p>{props.item.timespan}</p>}
        </div>
    )
}

export default EducationItem
