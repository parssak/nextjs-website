import styled from 'styled-components';
import { Title, Subtitle, Description, Container, ContactButton, TitleBall, DelayBox} from './styles';

const HeroContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    overflow-x: overflow;
    `
    
const Hero = () => {
    return (
        <HeroContainer>
            <Title larger >
                 <DelayBox delay={1.3} duration={0.8}>
                    <TitleBall random={Math.random() * 360} />
                 </DelayBox>
                Hi. I'm Parssa
                
            </Title>
            <Subtitle delay={0.5}>Fullstack Developer & Designer</Subtitle>
            <Description delay={0.7}>Based in Toronto, Canada 📍</Description>
            <Description delay={0.9}>Passionate about creating useful tools through software.</Description>
            <ContactButton delay={1}>Get In Touch</ContactButton>
        </HeroContainer>
    );
}

export default Hero;
