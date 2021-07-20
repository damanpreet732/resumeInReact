import React from 'react'
import WorkXpItem from './WorkXpItem'

function WorkXp() {
    return (
        <div className="workXp secInner">
            <h1># Work Experience</h1>
            <div className="row">
                <WorkXpItem/>
                <WorkXpItem/>
            </div>

        </div>
    )
}

export default WorkXp
