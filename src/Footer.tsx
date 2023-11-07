import './Footer.css';
import Header from './Header';
import HorizontalLine from './HorizontalLine';
import Ring from './icons/Ring';
import { SyntheticEvent, useState } from 'react';
import emailjs from 'emailjs-com';

function Footer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e: SyntheticEvent) => {
        e.preventDefault();

        emailjs
        .send(
            'service_sqtrynb',
            'template_i3ysp0i',
            { name, email, message },
            'KD3TtP-_wxySYmUEG'
        )
        .then(
            () => {
                alert('Email sent successfully');
            },
            () => {
                alert('Failed to send the email. Please try again later.');
            }
        );

        setName('');
        setEmail('');
        setMessage('');
    };


  return (
    <div className='footer'>
        <div className='footerContainer'>
            <div className='contact'>
                <div className='contactTitle'>Contact</div>
                <div className='contactDescription'>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</div>
                <div className='ring3'>
                    <Ring />
                </div>
            </div>
            <div className='contactForm'>
                <div className="inputContainer">
                    <input type="text" className="bottomBorder" placeholder='NAME' value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="inputContainer">
                    <input type="text" className="bottomBorder" placeholder='EMAIL' value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="inputContainer" >
                    <input type="text" className="bottomBorder" placeholder='MESSAGE' style={{height: '90px'}} value={message}
                        onChange={(e) => setMessage(e.target.value)} />
                </div>
                <div className='sendMessageContainer'>
                    <div className='sendMessage' style={{marginTop: '66px'}} onClick={sendEmail}>SEND MESSAGE</div>
                </div>
            </div>
        </div>
        <HorizontalLine />
        <Header />
    </div>
  )
}

export default Footer