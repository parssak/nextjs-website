export const projectData = [
    {
        name: "Kazakan 🎮",
        type: "Mobile Game",
        className: 'kazakan',
        tagline: 'High octane top-down shooter',
        description: "In Kazakan, you fight through waves of enemies with a bow. Kazakan was made with C# in Unity, and I did all the artwork in Aseprite. I released Kazakan for mobile, and I wrote an article on Medium about my experience developing it.",
        media: ["/media/kaz_1.png", "/media/kaz_2.png", "/media/kaz_3.png"],
        tech: ["C#", "Aseprite", "Unity"],
        platforms: ["iOS", "Android", "Web", "Mac", "Windows"],
        links: [{
            text: "App Store",
            link: "https://apps.apple.com/us/app/kazakan/id1527181335"
        },
        {
            text: "Play Store",
            link: "https://play.google.com/store/apps/details?id=com.ParssaMakesGames.KAZAKAN"
        },
        {
            text: "In Browser",
            link: "https://parssa.itch.io/kazakan"
        },
        {
            text: "Medium Article",
            link: "https://parssa.medium.com/lessons-learned-from-building-my-first-mobile-game-c9fbb7a7809e"
        }]
    },
    {
        name: "Darco 📖",
        type: "iPad App + Web App",
        className: 'darco',
        tagline: 'Easily convert PDFs to dark mode',
        description: "As a student in 2020, I read a lot of PDFs and lecture slides. So, I made Darco to reduce eye strain by easily converting any PDF into dark mode. Darco is available on the App Store for iPad, and on the browser.",
        media: ["/media/darco_1.png", "/media/darco_2.png", "/media/darco_3.png"],
        tech: ["JavaScript", "ReactJS", "Swift"],
        platforms: ["iPadOS", "Web"],
        links: [{
            text: "GitHub",
            link: "https://github.com/parssak/darco"
        }, {
            text: "App Store",
            link: "https://apps.apple.com/us/app/darco/id1541492663"
        },
        {
            text: "Live Demo",
            link: "./darco"
        }]
    },
    {
        name: "MixBot 🎛️",
        type: "Electron / Web App",
        className: 'mixbot',
        tagline: 'Your personal DJ',
        description: "MixBot acts as your personal DJ. MixBot finds songs to mix, loads songs onto two Decks, and mixes an entire DJ set. You can select from 3 different types of mixes, then Mixbot will fetch songs through the Spotify and YouTube APIs, and mixes them using the WebAudio API.",
        media: ["/media/mix_1.png", "/media/mix_2.png", "/media/mix_3.png"],
        tech: ["JavaScript", "ReactJS", "NodeJS", "ExpressJS", "Electron", "MongoDB"],
        platforms: ["MacOS", "Windows"],
        links: [{
            text: "GitHub",
            link: "https://github.com/parssak/mixbot"
        },
        {
            text: "Live Demo",
            link: "./mixbot"
        }
        ]
    },
    // {
    //     name: "TeaBlocks 🍎",
    //     description: `An educational mobile app for teaching kids to code through a node-based visual programming language and lessons. I'm currently working on this project, but there is a demo available if you want to check it out!  `,
    //     media: ["/media/teab_3.png", "/media/tea_2.png", "/media/tea_3.png"],
    //     tech: ["TypeScript", "React Native", "ExpressJS", "PostgreSQL"],
    //     platforms: ["TBD"],
    //     links: [
    //     {
    //         text: "Browser Demo",
    //         
    //             link: "https://parssak.github.io/teablocks-demo/"
    //     }]
    // }
];