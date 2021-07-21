import React from 'react'
import ContactInfoItem from './ContactInfoItem'
import data from '../../constants';

function ContactInfo(props) {

    const contact = data.contact;

    return (
        <div className="contactInfo flexDirCol">
            {contact.map(
                (item, index) => 
                    <ContactInfoItem key={index} 
                        type={item.type} 
                        link={item.link}
                        contact={item.contact} />
                )
            }
        </div>
    )
}

export default ContactInfo
