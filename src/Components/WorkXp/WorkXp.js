import React from 'react'
import WorkXpItem from './WorkXpItem'
import data from '../../constants'

function WorkXp(porps) {

    const workXp = data.workXp;

    return (
        <div className="workXp secInner">
            <h1># Work Experience</h1>
            {workXp.map((item, index) => <WorkXpItem key={index} item={item} />)}
        </div>
    )
}

export default WorkXp
