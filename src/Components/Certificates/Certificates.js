import React from 'react'

function Certificates() {
    return (
        <div className="certificates secInner">
            <h1># Certificates</h1>
            <Certificate/>
            <Certificate/>
            <Certificate/>
        </div>
    )
}

const Certificate = () => {
    return (
        <div className="certificate item">
            <h3>{'Certificate Name/Description'}</h3>
        </div>
    )
}

export default Certificates
