import React from 'react'

function WorkXpItem(props) {
    return (
        <div className="workXpItem item">
            <h2>{props.item.post}</h2>
            <h3>{props.item.locName}</h3>
            <p>{props.item.timespan}</p>
            <p>{props.item.description}</p>
        </div>
    )
}

export default WorkXpItem
