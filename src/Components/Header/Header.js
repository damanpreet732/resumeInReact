import React from 'react'
import ProfilePic from './ProfilePic'
import Summary from './Summary'
import Title from './Title'

import data from '../../constants'

function Header() {

    const header = data.header;

    return (
        <div className="header row">
            <div className="headerLeftSec col-md-3">
                <ProfilePic profilePic={header.profilePic} />
            </div>
            <div className="headerRightSec col-md-9">
                <Title title={header.title} />
                <Summary summary={header.summary} />
            </div>
        </div>
    )
}

export default Header
