import React from 'react'
import data from '../../constants'

function Languages() {
    return (
        <div className="languages secInner">
            <h1># Languages</h1>
            <Language languages={data.languages} />
            <span className="item">Profession Working Proficiency</span>
        </div>
    )
}

const Language = (props) => {
    return (
        <div className="language item">
            <h3>
                {props.languages.map(lang => (lang + ", "))}
            </h3>
        </div>
    )
}

export default Languages
