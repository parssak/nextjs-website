import styled from "styled-components";
import PageBase from "../components/PageBase";
import {
  Container,
  Description,
  LinkText,
  SectionTitle,
  Subtitle,
  Title,
  TitleBall
} from "../components/styles";
import { colors } from "../components/styles/constants";

const Tag = styled.div`
  background: ${(props) => props.color};
  display: grid;
  place-items: center;
  text-align: center;
  filter: contrast(1) brightness(1.1);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  user-select: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: contrast(1.1) brightness(1.2);
  }

  & > span {
    color: black;
    /* mix-blend-mode: difference; */
    text-align: center;
  }
`;

const skills = [
  { label: "TypeScript", color: `${colors.yellow}` },
  { label: "React", color: colors.yellow },
  { label: "Vue", color: colors.yellow },
  { label: "Node.js", color: colors.purple },
  { label: "Express", color: colors.purple },
  { label: "Go", color: colors.purple },
  { label: "SQL", color: colors.purple },
  { label: "Three.js", color: colors.red },
  { label: "TailwindCSS", color: colors.red },
  { label: "SCSS", color: colors.red }
];

export default function AboutPage() {
  return (
    <PageBase pageTitle="Parssa K | About">
      <Container>
        <Title larger>
          About Me
          <TitleBall delay={1.3} duration={0.8} random={Math.random() * 360} />
        </Title>
        <Subtitle>It's nice to meet you</Subtitle>
        <SectionTitle>Hi, I'm Parssa</SectionTitle>
        <Description>
          I'm a software developer{" "}
          <LinkText href="https://www.fig.io/" target="_about">
            @fig
          </LinkText>{" "}
          working on bringing autocomplete & better tooling for dotfiles to the terminal, and a
          front-end developer at{" "}
          <LinkText href="https://www.airwhistle.com/" target="_about">
            @AirWhistleMedia
          </LinkText>
          . I'm currently studying at{" "}
          <LinkText href="https://www.utoronto.ca/" target="_about">
            @UofT
          </LinkText>{" "}
          as a 4th year Mathematics & Computer Science student.
        </Description>
        <Description>
          I enjoy bringing ideas to life through code. I'm passionate about everything frontend &
          design related, and I put emphasis on UX and accessibility. I'm constantly learning new
          skills and technologies, and tinkering with them.
        </Description>
        <br />
        <br />
        <SectionTitle>Technologies I use every day</SectionTitle>
        <br />
        <Description>
          I work with these technologies at my places of work, or in side projects I have on the
          side.
        </Description>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            maxWidth: "70ch"
          }}
        >
          {skills.map((skill) => (
            <Tag key={skill.label} color={skill.color}>
              <span>{skill.label}</span>
            </Tag>
          ))}
        </div>
      </Container>
    </PageBase>
  );
}
