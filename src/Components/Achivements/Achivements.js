import React from 'react'

function Achivements() {
    return (
        <div className="achivements secInner">
            <h1># Achivements</h1>
            <Achivement/>
            <Achivement/>
            <Achivement/>
        </div>
    )
}

const Achivement = () => {
    return (
        <div className="achivement item">
            <h3>Achivment Name</h3>
        </div>
    )
}

export default Achivements
