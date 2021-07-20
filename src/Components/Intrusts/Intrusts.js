import React from 'react'
import { BsStar } from 'react-icons/bs'
import data from '../../constants'

function Intrusts() {

    const intrusts = data.intrusts;

    return (
        <div className="intrusts secInner">
            <h1># Intrusts</h1>
            <div className="intrustCollection ">
                {intrusts.map((item,index) => <Intrust key={index} name={item} />)}
            </div>
        </div>
    )
}

const Intrust = (props) => {
    return (
        <div className="intrust item ">
            <BsStar size="2em" color="rgb(50 191 170)" />
            <h3>{props.name}</h3>
        </div>
    )
}

export default Intrusts
