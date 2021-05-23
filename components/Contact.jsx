import React, { useState } from 'react';
import styled from 'styled-components';
import { ContactButton, Container, Description, Input, TextArea, Title, Label, TitleBall, LinkText } from './styles';
import Footer from './Footer';
import { v4 as uuidv4 } from 'uuid';
import emailjs from 'emailjs-com';
import Socials from './Socials';

const ContactContainer = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    @media (max-width: 900px) {
        flex-direction: column;
        margin-bottom: 7rem;
    }
`
const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 50%;
`

const ContactSectionContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: overflow;
`

const Contact = ({ setAlertBox, contactRef }) => {
    const [lock, setLock] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setLock(true);
        setAlertBox({ id: uuidv4(), text: 'Sending message...', type: 'pending' });

        const combineMessage = {};
        for (let child of e.target.children)
            if (child.name)
                combineMessage[child.name] = child.value

        emailjs.send('service_cgfcq9r', 'template_u8oi1y8', combineMessage, 'user_uqFWPOLBqlRmtvJG5zsPg')
            .then((result) => {
                console.log(result?.text)
                setAlertBox({ id: uuidv4(), text: '📨 Message successfully sent', type: 'success' });
            }, (error) => {
                console.log(error?.text)
                setAlertBox({ id: uuidv4(), text: 'An error occurred. :(', type: 'error' });
            }).then(() => setTimeout(() => { setLock(false); }, 3000));
    }

    const handleAddClipboard = () => {
        navigator.clipboard.writeText('parssak@gmail.com')
        setAlertBox({ id: uuidv4(), text: '🎉 Email copied to clipboard', type: 'success' });
    }
    return (
        <ContactSectionContainer ref={contactRef}>
            <Title>
                Get In Touch
                <TitleBall random={Math.random() * 360} left scale={0.5} />
            </Title>
            <ContactContainer>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <Description>
                        If you want to get in touch or just
                        say hi, you can email me
                    at <LinkText onClick={() => handleAddClipboard()}> parssak@gmail.com</LinkText>,
                    or use this form, and it’ll go right to my inbox.
                </Description>
                    <Socials />
                </div>
                <ContactForm onSubmit={handleSubmit} disabled={lock}>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" name="user_name" />
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" name="user_email" />
                    <Label htmlFor="message">Message</Label>
                    <TextArea type="text" name="message" />
                    <ContactButton fill type="submit" disabled={lock}>Send Message</ContactButton>
                </ContactForm>
            </ContactContainer>
            <Footer />
        </ContactSectionContainer>

    );
}

export default Contact;
