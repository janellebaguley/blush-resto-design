import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = props => {
    let [firstName, setFirstName] = useState(''),
        [lastName, setLastName] = useState(''),
        [email, setEmail] = useState(''),
        [subject, setSubject] = useState(''),
        [message, setMessage] = useState(''),
        [messageSent, setMessageSent] = useState(false);


    useEffect(() => {
        document.title = 'Contact - Blush Restoration and Design'
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();

        axios.post('/api/email', {firstName, lastName, email, subject, message})
        .then(() => {
            setMessageSent(true);
            setSubject('');
            setMessage('');
        })
        .catch(err => console.log(err))
    }
    return(
        <main className='contact-me'>
            <h2>Contact me!</h2>
            <section className='contact-info'>
                <p>Let me decorate your tree, this year! Please fill out the form and we will be happy to update you with our availability.</p>
            </section>
            {!messageSent
                ? (
                    <form className='contact-form'>
                        <label>Name *</label>
                        <div>
                            <section className='name-input'>
                                <input value={firstName} 
                                autoComplete='given-name' required onChange={e => setFirstName(e.target.value)}/>
                                <span className ='name'>First Name</span>
                            </section>
                            <section className='name-input'>
                                <input value={lastName}
                                autoComplete='given-name' 
                                required onChange={e => setLastName(e.target.value)}/>
                                <span className ='name'>Last Name</span>
                            </section>
                        </div>
                        <label>Email *</label>
                        <input value={email} required onChange={e => setEmail(e.target.value)}/>
                        <label>Subject *</label>
                        <input value={subject} required onChange={e => setSubject(e.target.value)}/>
                        <label className= 'message'>Message *</label>
                        <textarea value={message} required autoComplete = 'off' onChange={e => setMessage(e.target.value)}/>
                        <button className= 'submit-button' onClick={sendMessage}>Submit</button>
                    </form>
                ) 
                : (
                    <section>
                        <h2>Your message was sent.</h2>
                        <h3>We will reply to your request as soon as  possible.</h3>
                        <button onClick={() => setMessageSent(false)}>New Message</button>
                    </section>
                )}
        </main>
    )
}
export default Contact;