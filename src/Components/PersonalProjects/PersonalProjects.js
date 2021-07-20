import React from 'react'
import data from '../../constants'
import PersonalProjectsItem from './PersonalProjectsItem'

function PersonalProjects() {
    return (
        <div className="personalProjects secInner">
            <h1># Personal Projects</h1>
            {data.personalProjects.map((project,index)=><PersonalProjectsItem key={index} project={project} />)}
        </div>
    )
}

export default PersonalProjects
