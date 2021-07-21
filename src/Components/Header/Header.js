import React from 'react'
import ProfilePic from './ProfilePic'
import Summary from './Summary'
import Title from './Title'

import data from '../../constants'

function Header() {

    const header = data.header;

    return (
        <div className="header flexDirCol">
            <div className="headerLeftSec">
                <ProfilePic profilePic={header.profilePic} />
            </div>
            <div className="headerRightSec">
                <Title title={header.title} />
                <Summary summary={header.summary} />
            </div>
        </div>
    )
}

export default Header
