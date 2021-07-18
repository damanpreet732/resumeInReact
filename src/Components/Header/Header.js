import React from 'react'
import ProfilePic from './ProfilePic'
import Summary from './Summary'
import Title from './Title'

function Header() {
    return (
        <div className="header">
            <div className="headerLeftSec">
                <ProfilePic/>
            </div>
            <div className="headerRightSec">
                <Title/>
                <Summary/>
            </div>

        </div>
    )
}

export default Header
