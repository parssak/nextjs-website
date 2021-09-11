export const projectData = [
  {
    name: "Kazakan",
    type: "Mobile Game",
    className: "kazakan",
    bgColor: "rgba(38, 48, 105, 0.6)",
    tagline: "High octane top-down shooter",
    description:
      "In Kazakan, you fight through waves of enemies with a bow. Kazakan was made with C# in Unity, and I did all the artwork in Aseprite. I released Kazakan for mobile, and I wrote an article on Medium about my experience developing it.",
    media: ["/media/kaz_1.png", "/media/kaz_2.png", "/media/kaz_3.png"],
    tech: ["C#", "Aseprite", "Unity"],
    platforms: ["iOS", "Android", "Web", "Mac", "Windows"],
    links: [
      {
        text: "App Store",
        link: "https://apps.apple.com/us/app/kazakan/id1527181335",
      },
      {
        text: "Play Store",
        link: "https://play.google.com/store/apps/details?id=com.ParssaMakesGames.KAZAKAN",
      },
      {
        text: "In Browser",
        link: "https://parssa.itch.io/kazakan",
      },
      {
        text: "Medium Article",
        link: "https://parssa.medium.com/lessons-learned-from-building-my-first-mobile-game-c9fbb7a7809e",
      },
    ],
  },
  {
    name: "Darco",
    type: "iPad App",
    className: "darco",
    bgColor: "rgba(12, 7, 42, 0.7)",
    tagline: "Easily convert PDFs to dark mode",
    description:
      "As a student in 2020, I read a lot of PDFs and lecture slides. So, I made Darco to reduce eye strain by easily converting any PDF into dark mode. Darco is available on the App Store for iPad, and on the browser.",
    media: ["/media/darco_1.png", "/media/darco_2.png", "/media/darco_3.png"],
    tech: ["JavaScript", "ReactJS", "Swift"],
    platforms: ["iPadOS", "Web"],
    links: [
      {
        text: "GitHub",
        link: "https://github.com/parssak/darco",
      },
      {
        text: "App Store",
        link: "https://apps.apple.com/us/app/darco/id1541492663",
      },
      {
        text: "Live Demo",
        link: "./darco",
      },
    ],
  },
  {
    name: "MixBot",
    type: "Web App",
    className: "mixbot",
    bgColor: "rgba(23, 21, 25, 0.56)",
    tagline: "Your personal DJ",
    description:
      "MixBot acts as your personal DJ. MixBot finds songs to mix, loads songs onto two Decks, and mixes an entire DJ set. You can select from 3 different types of mixes, then Mixbot will fetch songs through the Spotify and YouTube APIs, and mixes them using the WebAudio API.",
    media: ["/media/mix_1.png", "/media/mix_2.png", "/media/mix_3.png"],
    tech: [
      "JavaScript",
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "Electron",
      "MongoDB",
    ],
    platforms: ["MacOS", "Windows"],
    links: [
      {
        text: "GitHub",
        link: "https://github.com/parssak/mixbot",
      },
    ],
  },
  {
    name: "Browser Engine",
    type: "Web App",
    description: `A 3D game engine that runs entirely in the browser. I'm currently working on this project, but there is a demo available if you want to check it out!  `,
    media: ["/media/be_1.png", "/media/be_2.png", "/media/be_3.png"],
    tech: ["TypeScript", "ReactJS", "ThreeJS"],
    platforms: ["Web"],
    links: [
      {
        text: "Demo",
        link: "https://parssak.github.io/browser-engine/",
      },
    ],
  },
];