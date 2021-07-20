import React from 'react'
import Skill from './Skill'
import data from '../../constants'

function Skills(props) {

    const skills = data.skills;

    return (
        <div className="skills secInner">
            <h1># Skills</h1>
            {skills.map(
                (item, index) =>
                    <Skill key={index}
                        name={item.name}
                        rating={item.rating} />
            )}
        </div>
    )
}

export default Skills
