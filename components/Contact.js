import React from 'react';
import styled from 'styled-components';
import { ContactButton, Container, Description, Input, TextArea, Title } from './styles';
import Footer from './Footer';

const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 7rem;
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
const Label = styled.label`
    color: #c0c0c0;
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
`


const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <Container>
            <br/>
            <br/>
            <br/>
            <Title style={{ margin: '5rem 0rem', marginTop: '7rem' }}>Get In Touch</Title>
            <ContactContainer>
                <Description>If you want to get in touch or just say hi, you can email me at parssak@gmail.com, or use this form, and it’ll go right to my inbox.</Description>
                <ContactForm>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" name="name" />
                    <Label htmlFor="email">Email</Label>
                    <Input type="emial" id="email" name="email" />
                    <Label htmlFor="message">Message</Label>
                    <TextArea type="text" id="message" name="message" />
                    <ContactButton fill onClick={handleSubmit}>Send Message</ContactButton>
                </ContactForm>
            </ContactContainer>
            <Footer />
        </Container>

    );
}

export default Contact;
