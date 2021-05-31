import PageBase from '../components/PageBase'
import SelectedProjects from '../components/SelectedProjects'
import { Container, Description, Subtitle, Title, TitleBall } from  '../components/styles'

export default function ProjectsPage() {
    return (
        <PageBase pageTitle='Parssa K | Projects'>
            <Container>
                <Title larger>
                    Projects
                 <TitleBall delay={1.3} duration={0.8} random={Math.random() * 360} />
                </Title>
                <Subtitle>The things I've done</Subtitle>
                <Description>I'm always thinking of app & game ideas that spark my interest, here's all the ones I've brought to life.</Description>
                <SelectedProjects />
            </Container>
        </PageBase>
    )
}
