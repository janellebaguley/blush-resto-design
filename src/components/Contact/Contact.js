import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Contact = props => {
    let [firstName, setFirstName] = useState(''),
        [lastName, setLastName] = useState(''),
        [email, setEmail] = useState(''),
        [subject, setSubject] = useState(''),
        [message, setMessage] = useState(''),
        [messageSent, setMessageSent] = useState(false)
}

    useEffect(() => {
        document.title = 'Contact - Blush Restoration and Design'
    }, [])

    sendMessage = (e) => {
        e.preventDefault();

        axios.post('/api/email', firstName, lastName, email, subject, message)
        .then(() => {
            setMessageSent(true)
            setSubject('')
            setMessage('')
        })
        .catch(err => console.log(err))
    }