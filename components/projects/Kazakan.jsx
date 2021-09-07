import React from "react";
import ProjectDetails from "./ProjectDetails";
import {
  ProjectContainer,
  Subtitle,
  Title,
  Description,
  LinkText,
  SectionTitle,
} from "../styles";

const Kazakan = () => {
  return (
    <ProjectContainer>
      <div className="p-title">
        <Title larger>Kazakan</Title>
        <Subtitle>Mobile Game</Subtitle>
        <br />
        <br />
      </div>
      <div className="p-description">
        <Description>
          <b>
            A top-down shooter game where you protect the Orb from waves of
            enemies.
          </b>
        </Description>
        <br />
        <br />
        <Description className="priority-2">
          My first commercial project, and played a pivotal role in making me
          the developer I am today.
        </Description>
        <Description>
          Kazakan was made with C# in Unity, and I did all the artwork in
          Aseprite. I released Kazakan for mobile, and I wrote a{" "}
          <LinkText
            href="https://parssa.medium.com/lessons-learned-from-building-my-first-mobile-game-c9fbb7a7809e"
            target="_about"
          >
            Medium article
          </LinkText>{" "}
          about my experience. about my experience developing it.
          <br />
          <br />
        </Description>
        <SectionTitle>Links</SectionTitle>
        <Description>
          → Available in the{" "}
          <LinkText
            href="https://apps.apple.com/us/app/kazakan/id1527181335"
            target="_about"
          >
            App Store
          </LinkText>{" "}
          and{" "}
          <LinkText
            href="https://play.google.com/store/apps/details?id=com.ParssaMakesGames.KAZAKAN"
            target="_about"
          >
            Play Store
          </LinkText>
          <br />→ Play Kazakan in your{" "}
          <LinkText href="https://parssa.itch.io/kazakan" target="_about">
            browser
          </LinkText>
          <br />→{" "}
          <LinkText
            href="https://parssa.medium.com/lessons-learned-from-building-my-first-mobile-game-c9fbb7a7809e"
            target="_about"
          >
            Medium article
          </LinkText>{" "}
          about my experience
        </Description>
        <br />
      </div>
      <div className="p-media">
        <img src="/media/kaz_1.png" />
        <img src="/media/kaz_3.png" />
        <img src="/media/kaz_2.png" />
      </div>
      <div className="p-tech">
        <ProjectDetails
          tech={"C# • Unity • Aseprite"}
          role={"Creator • Game Developer"}
          date={"Summer 2020"}
        />
      </div>
    </ProjectContainer>
  );
};

export default Kazakan;
