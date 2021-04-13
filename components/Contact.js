import React from 'react';
import styled from 'styled-components';
import { ContactButton, Container, Description, primaryColor, Title } from './styles';
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
    /* @media (max-width: 800px) {
        
    } */
`
const Label = styled.label`
    color: #c0c0c0;
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
`

const Input = styled.input`
border: 0;
font-size: 1.5rem;
background: #292929;
border-radius: 0.5rem;
margin-bottom: 1rem;
font-family: Inter;
color: whitesmoke;
outline: none;
padding: 0.5rem;
border: 1px solid transparent;
transition: all 0.5s ease;
box-shadow: 0px 4px 1rem -10px rgba(154, 147, 147, 0.25);
:focus {
    border-color: rgba(98, 98, 98, 0.58);
    box-shadow: 0px 4px 1rem rgba(154, 147, 147, 0.25);
}
`
const TextArea = styled.textarea`
border: 0;
font-size: 1.5rem;
background: #292929;
border-radius: 0.5rem;
margin-bottom: 1rem;
resize: none;
min-height: 15ch;
font-family: Inter;
color: whitesmoke;
outline: none;
padding: 0.5rem;
border: 1px solid transparent;
transition: all 0.5s ease;
box-shadow: 0px 4px 1rem -10px rgba(154, 147, 147, 0.25);
:focus {
    border-color: rgba(98, 98, 98, 0.58);
    box-shadow: 0px 4px 1rem rgba(154, 147, 147, 0.25);
}
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
                    <Label for="name">Name</Label>
                    <Input type="text" id="name" name="name" />
                    <Label for="email">Email</Label>
                    <Input type="emial" id="email" name="email" />
                    <Label for="message">Message</Label>
                    <TextArea type="text" id="message" name="message" />
                    <ContactButton fill onClick={handleSubmit}>Send Message</ContactButton>
                </ContactForm>
            </ContactContainer>
        </Container>

    );
}

export default Contact;
