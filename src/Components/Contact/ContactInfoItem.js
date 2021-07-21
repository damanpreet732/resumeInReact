import React from 'react'
import { IoIosContact } from 'react-icons/io'
import { FiMail } from 'react-icons/fi'
import { FcCalendar } from 'react-icons/fc'
import { FaMobileAlt, FaLinkedin } from 'react-icons/fa'
import { AiFillGithub, AiFillSkype } from 'react-icons/ai'



function ContactInfoItem(props) {

    const SwitchIconWithType = (type) => {
        switch (type) {
            case "email":
                return <FiMail color="rgb(50 191 170)" size="2em" />;
            case "github":
                return <AiFillGithub color="rgb(50 191 170)" size="2em" />;
            case "linkedIn":
                return <FaLinkedin color="rgb(50 191 170)" size="2em" />;
            case "mobile":
                return <FaMobileAlt color="rgb(50 191 170)" size="2em" />;
            case "bday":
                return <FcCalendar color="rgb(50 191 170)" size="2em" />;
            case "skype":
                return <AiFillSkype color="rgb(50 191 170)" size="2em" />;
            default:
                <IoIosContact color="rgb(50 191 170)" size="2em" />
        }
    }

    return (
        <div className="contactInfoItem">
            {props.type && SwitchIconWithType(props.type)}
            {props.contact && <a href={props.link}>{props.contact}</a>}
        </div>
    )
}

export default ContactInfoItem
