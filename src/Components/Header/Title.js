import React from 'react'

function Title(props) {

    const title = props.title;

    return (
        <div className="title">
            <div className="name">
                <h1>
                    {title.name}
                </h1>
            </div>
            <div className="profile">
                <h3>
                    {title.profile}
                </h3>
            </div>
        </div>
    )
}

export default Title
