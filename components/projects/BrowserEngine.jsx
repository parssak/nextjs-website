import React from "react";
import ProjectDetails from "./ProjectDetails";
import {
  Description,
  Subtitle,
  Title,
  LinkText,
  ProjectContainer,
  SectionTitle,
} from "../styles";

const BrowserEngine = () => {
  return (
    <ProjectContainer>
      <div className="p-title">
        <Title larger>Browser Engine</Title>
        <Subtitle>Web App</Subtitle>
        <br />
        <br />
      </div>
      <div className="p-description">
        <Description>
          <b>A 3D Game Engine that runs entirely in the browser.</b>
        </Description>
        <br />
        <br />
        <Description>
          Browser Engine (name is a work-in-progress) is a 3D game engine that
          runs entirely in the browser. It allows for 3D scenes to be created
          directly inside the browser, and fully supports custom component
          scripting using{" "}
          <LinkText href="https://threejs.org/" target="_about">
            three.js
          </LinkText>{" "}. Shader scripting is also fully supported, with shaders being written in
          <LinkText href="https://en.wikipedia.org/wiki/OpenGL_Shading_Language" target="_about">
            {" "}
            GLSL
          </LinkText>.
          <br />
          <br />
        </Description>
        <SectionTitle>Links</SectionTitle>
        <Description>
          Disclaimer: I'm still actively working on this project, and things are subject to change.
          <br />→ Try Browser Engine in the{" "}
          <LinkText href="https://parssak.github.io/browser-engine/" target="_about">
            browser
          </LinkText>
        </Description>
        <br />
      </div>
      <div className="p-media">
        <img src="/media/be_1.png" />
        <img src="/media/be_3.png" />
        <img src="/media/be_2.png" />
      </div>
      <div className="p-tech">
        <ProjectDetails
          tech={"ReactJS • TypeScript • Three.JS"}
          role={"Creator"}
          date="Summer 2021"
        />
      </div>
    </ProjectContainer>
  );
};

export default BrowserEngine;
