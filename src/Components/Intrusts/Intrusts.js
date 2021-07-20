import React from 'react'
import { BsStar } from 'react-icons/bs'

function Intrusts() {
    return (
        <div className="intrusts secInner">
            <h1># Intrusts</h1>
            <div className="intrustCollection ">
                {
                    ([...Array(5)].map((index,item) => 
                        {return (<Intrust key={index}/>)}
                    ))
                }
            </div>
        </div>
    )
}

const Intrust = (props) => {
    return (
        <div className="intrust item ">
            <BsStar size="2em" color="rgb(50 191 170)" />
            <h3>Intrust</h3>
        </div>
    )
}

export default Intrusts
