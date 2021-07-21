import React from 'react'
import { CgWebsite } from  'react-icons/cg'
import { AiFillGithub } from 'react-icons/ai'

function PersonalProjectsItem(props) {
    return (
        <div className="personalProjectsItem item">
            {props.project.name && <h3>{props.project.name}</h3>}
            {props.project.desc && <p>{props.project.desc}</p>}
            {props.project.githubLink && <p>
                <a href={props.project.githubLink}>
                    <AiFillGithub color="rgb(50 191 170)" size="2em" />
                </a>
                {props.project.githubLink}
            </p>}
            {props.project.url && <p>
                <a href={props.project.url}>
                    <CgWebsite color="rgb(50 191 170)" size="2em" />
                </a>
                {props.project.url}
            </p>}
        </div>
    )
}

export default PersonalProjectsItem
