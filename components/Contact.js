import React from 'react';
import styled from 'styled-components';
import { ContactButton, Container, Description, Input, TextArea, Title, Label, TitleBall } from './styles';
import Footer from './Footer';

const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
`;
const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <ContactSectionContainer>
            <Title>
                Get In Touch
                {/* <TitleBall random={Math.random() * 360} left scale={0.5}/> */}
            </Title>
            <ContactContainer>
                <Description>If you want to get in touch or just say hi, you can email me at parssak@gmail.com, or use this form, and it’ll go right to my inbox.</Description>
                <ContactForm>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" name="name" />
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" name="email" />
                    <Label htmlFor="message">Message</Label>
                    <TextArea type="text"  name="message" />
                    <ContactButton fill onClick={handleSubmit}>Send Message</ContactButton>
                </ContactForm>
            </ContactContainer>
            <Footer />
        </ContactSectionContainer>

    );
}

export default Contact;
