import React from 'react'
import { IoIosContact } from 'react-icons/io'

function ContactInfoItem(props) {
    return (
        <div className="contactInfoItem">
            <IoIosContact color="rgb(50 191 170)" size="2em" />
            <a href={"#daman"}>{"damanpreetsingh732@gmail.com"}</a>
        </div>
    )
}

export default ContactInfoItem
