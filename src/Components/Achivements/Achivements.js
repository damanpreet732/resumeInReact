import React from 'react'
import data from '../../constants'

function Achivements() {

    const achivements = data.achivments;

    return (
        <div className="achivements secInner">
            <h1># Achivements</h1>
            {achivements.map((item,index)=><Achivement key={index} item={item} />)}
        </div>
    )
}

const Achivement = (props) => {
    return (
        <div className="achivement item">
            <h3>{props.item.name}</h3>
            <p>{props.item.desc}</p>
        </div>
    )
}

export default Achivements
