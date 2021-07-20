import React from 'react'
import { FiLink } from 'react-icons/fi'
import data from '../../constants'

function Certificates() {
    return (
        <div className="certificates secInner">
            <h1># Certificates</h1>
            {data.certificates.map((item,index)=><Certificate key={index} item={item} />)} 
        </div>
    )
}

const Certificate = (props) => {
    return (
        <div className="certificate item">
            <h3>{props.item.desc} {props.item.link ? <a href={props.item.link}><FiLink/></a> : null}</h3>
        </div>
    )
}

export default Certificates
