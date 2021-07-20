import React from 'react'

function PersonalProjectsItem(props) {
    return (
        <div className="personalProjectsItem item">
            <h3>{props.project.name}</h3>
            <p>{props.project.desc}</p>
            <a href={props.project.githubLink}>{props.project.githubLink}</a>
            <br/><a href={props.project.url}>{props.project.url}</a>
        </div>
    )
}

export default PersonalProjectsItem
