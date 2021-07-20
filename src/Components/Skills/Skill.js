import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

function Skill() {
    return (
        <div className="skill item">
            <h3>Skill</h3>
            {/* <div>
                {
                    [...Array(5)].map((item,index)=>{
                        return (
                            <div className="rating"></div>
                        )
                    })
                }
                
            </div> */}
            <ProgressBar bgColor="rgb(50 191 170)" completed={50}/>
        </div>
    )
}

export default Skill
