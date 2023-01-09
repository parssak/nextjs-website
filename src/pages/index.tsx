import { Card, Text } from "@parssa/universal-ui";
import { ExternalLink } from "components/ExternalLink";
import { HeaderSection } from "components/HeaderSection";
import { useEffect, useState } from "react";

const things = [
  {
    emoji: "🧑🏻‍💻",
    text: (
      <>
        Lead frontend engineer & designer{" "}
        <ExternalLink imageHref="/preview/fig-preview.webp" href="https://www.fig.io">
          @fig
        </ExternalLink>
        {/*  md:inline */}
        <span className="hidden">, we're hiring!</span>
      </>
    )
  },
  {
    emoji: "🔧",
    text: (
      <>
        Building an open-source{" "}
        <ExternalLink
          imageHref="/preview/universal-preview.webp"
          href="
      https://universal-ui.vercel.app"
        >
          React UI library
        </ExternalLink>{" "}
        with Tailwind & RadixUI
      </>
    )
  },
  {
    emoji: "✨",
    text: "Obsessed with intuitive & delightful interfaces"
  },
  // {
  //   emoji: "📍",
  //   text: "Based in Toronto, Canada"
  // }
];

const projects = [
  {
    title: "fig.io",
    date: "2022 — Present",
    subtitle: "Lead frontend engineer & designer",
    items: [
      {
        title: "Scripts & CLIs",
        href: "https://fig.io/blog/post/scripts-launch",
        description: "frontend UI & script creation w/ GraphQL"
      },
      {
        title: "Landing Page",
        href: "https://www.fig.io",
        description: "designed & developed the landing page for fig.io"
      },
      {
        title: "FigUI",
        href: "https://ui.fig.io/",
        description: "design system & components powering fig products"
      }
    ]
  },
  {
    title: "Universal UI",
    date: "2023 — Present",
    subtitle: "Open Source",
    items: [
      {
        title: "Custom Docs",
        href: "https://universal-ui.vercel.app/docs/components/inputs/button",
        description: "built a custom storybook-style docs site"
      },
      {
        title: "Dark Mode",
        href: "https://universal-ui.vercel.app",
        description: "comes with powerful color inference & theming"
      },
      {
        title: "Flexible",
        href: "https://universal-ui.vercel.app/docs/getting-started/customization",
        description: "able to customize entire library to any style imaginable"
      }
    ]
  },
  {
    title: "Browser Engine",
    date: "2021 Winter",
    subtitle: "Open Source",
    items: [
      {
        title: "Game Engine",
        href: "https://parssak.github.io/browser-engine/",
        description: "pure-browser 3d game engine"
      },
      {
        title: "Scripting",
        href: "https://parssak.github.io/browser-engine/",
        description: "supports custom scripting with three.js"
      },
      {
        title: "Shaders",
        href: "https://parssak.github.io/browser-engine/",
        description: "able to add custom shader materials to objects"
      }
    ]
  },
  {
    title: "Kazakan",
    date: "2020 Summer",
    subtitle: "Open Source",
    items: [
      {
        title: "Mobile Game",
        href: "https://apps.apple.com/ca/app/kazakan/id1527181335",
        description: "top-down 2d shooter for iOS & Android"
      },
      {
        title: "Process",
        href: "https://medium.com/@parssa/lessons-learned-from-building-my-first-mobile-game-c9fbb7a7809e",
        description: "wrote an article about the development process"
      },
      {
        title: "Artwork",
        href: "https://medium.com/@parssa/lessons-learned-from-building-my-first-mobile-game-c9fbb7a7809e",
        description: "did all pixel artwork in Aseprite, including animations"
      }
    ]
    // note: "Exploration project, not maintained anymore"
  }
];

const FancyTopGradient = ({ shouldParty }: { shouldParty: boolean }) => {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-0">
      <div
        aria-hidden="true"
        className={`absolute 
        transition-all
        duration-[3000ms]
        ${shouldParty ? "animate-hue-rotate h-screen" : "h-48"}
        -inset-x-2
        -top-4
        blur
        bg-gradient-to-tr
        from-[#FFB67D0a]
        via-[#B363750e]
        to-[#C6ACCD99]
        dark:from-[#0B1F39]
        dark:to-[#5895AE88]
        dark:via-[#EF6D3622]
        saturate-200
        contrast-150
        dark:contrast-100`}
      />
      <div
        aria-hidden="true"
        className={`absolute 
        transition-all
        duration-[3000ms]
        ${shouldParty ? "animate-hue-rotate h-screen" : "h-48"}
        -inset-x-2
        -top-4
        blur
        bg-gradient-to-tl
        from-[#D58AA90e]
        via-[#D58AA940]
        to-[#7690BEa0]
        
        dark:from-[#0B1F39]
        dark:to-[#5895AE88]
        dark:via-[#EF6D3622]
        saturate-200
        contrast-150
        dark:contrast-100`}
      />

      <div
        aria-hidden="true"
        className={`
        absolute inset-x-0 top-0
        transition-all
        duration-[3000ms]
        
        ${shouldParty ? "h-screen via-theme-pure" : "h-48 via-theme-pure/60 "}
        
        bg-gradient-to-t from-theme-pure to-theme-pure/20`}
      />

      {/* Global grain */}
    </div>
  );
};

export const useDebouncedEffect = (
  effect: () => void,
  deps: React.DependencyList = [],
  delayMs = 500
) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      effect();
    }, delayMs);

    return () => {
      clearTimeout(handler);
    };
  }, [effect, delayMs, ...deps]);
};

export default function Page() {
  const [shouldParty, setShouldParty] = useState(false);
  const [content, setContent] = useState("I build products that make people productive");

  useDebouncedEffect(() => {
    setShouldParty(
      content.includes("party time") ||
        content.includes("disco") ||
        content.includes("dance") ||
        content.includes("let loose")
    ),
      [content];
  });

  return (
    <>
      <FancyTopGradient shouldParty={shouldParty} />
      <div className="grain opacity-70 fixed inset-0" />

      <div className="container pt-36">
        <div className="relative">
          <HeaderSection
            title={
              <Text className="flex-shrink-0 gradient-text " variant="h1">
                Parssa Kyanzadeh
              </Text>
            }
            subtitle={
              <>
                software engineer <span className="text-theme-muted opacity-50">&</span> designer
              </>
            }
          />

          <Text size="lg" className="my-size-2y">
            <strong>
              <span
                contentEditable
                className={"focus:outline-none focus:bg-theme-active/20 transition-colors"}
                onKeyUp={(e) => {
                  if (e.target instanceof HTMLSpanElement) {
                    const inner = e.target.innerText;
                    setContent(inner);
                  }
                }}
                dangerouslySetInnerHTML={{
                  __html: "I build products that make people productive"
                }}
              />
              .
            </strong>
          </Text>

          {/* tl;dr */}
          <section className="pt-size-8y">
            <HeaderSection title="tl;dr" subtitle="the who/what/where" />
            {things.map(({ emoji, text }) => (
              <Text key={emoji} className="flex mt-1">
                <span className="mr-2.5 scale-110">{emoji}</span>
                <span>{text}</span>
              </Text>
            ))}
          </section>

          {/* projects */}
          <section className="pt-size-8y">
            <HeaderSection title="Projects" subtitle="what I've worked on" />
            <div className="flex gap-size-x items-start">
              <div className="relative grid place-items-center mt-3">
                <div
                  className="absolute w-3 h-3 bg-theme-active animate-ping-slow rounded-full"
                  data-theme="success"
                />
                <div className="w-2 h-2 bg-emerald-500 rounded-full relative" />
              </div>
              <Text variant="h6" className="text-size">
                Currently building{" "}
                <ExternalLink
                  className="font-medium"
                  imageHref="/preview/scripts-preview.webp"
                  href="https://fig.io/user-manual/scripts"
                >
                  scripts
                </ExternalLink>{" "}
                at fig and working on{" "}
                <ExternalLink
                  className="font-medium"
                  imageHref="/preview/universal-preview.webp"
                  href="https://universal-ui.vercel.app"
                >
                  universal-ui
                </ExternalLink>{" "}
                in my free time.
              </Text>
            </div>
            <div className="grid lg:grid-cols-2 w-full gap-6 mt-size-4y">
              {projects.map((project) => (
                <Card
                  key={project.title}
                  as={Card.Content}
                  className="bg-theme-pure/20 backdrop-blur w-full"
                >
                  <div className="flex w-full justify-between items-center">
                    <Text variant="h5" className="font-medium">
                      {project.title}
                    </Text>
                    <Text size="xs" className="border-0  opacity-50">
                      {project.date}
                    </Text>
                  </div>
                  <div className="mt-size-2y divide-y divide-theme-base/20">
                    {project.items.map((item) => (
                      <a
                        href={item.href}
                        key={item.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <Text
                          key={item.title}
                          size="sm"
                          theme="info"
                          className="py-size-2y leading-normal -mx-size-y px-size-y rounded text-theme-base ease-linear group-hover:bg-theme-active/20 group-hover:text-theme-active cursor-pointer transition-all duration-[150ms]"
                        >
                          <span className="font-medium mr-2 block md:text-right xl:min-w-[12ch] sm:inline-block text-theme-active">
                            {item.title}
                          </span>{" "}
                          <span className="relative">
                            <span className="text-theme-active/80 opacity-100 group-hover:opacity-0 transition-all duration-[150ms]">
                              {item.description}
                            </span>
                            <span className="absolute left-0 group-hover:opacity-100 opacity-0 top-0 right-0 whitespace-nowrap sm:top-auto transition-all duration-[150ms]">
                              check it out &rarr;
                            </span>
                          </span>
                        </Text>
                      </a>
                    ))}
                  </div>
                  {/* {project.note && (
                  <Card.Content
                    data-size="sm"
                    className="rounded bg-theme-active/20 mt-size-y -mx-size-y px-size-y"
                    data-theme="warning"
                  >
                    <Text size="xs" className="leading-none">
                      {project.note}
                    </Text>
                  </Card.Content>
                )} */}
                </Card>
              ))}
            </div>
          </section>

          {/* get in touch */}
          <section className="py-size-8y">
            <HeaderSection title="Contact" subtitle="how to reach me" />
            <Text>
              If you want to chat, feel free to send me an email at{" "}
              <ExternalLink href="mailto:parssak@gmail.com">parssak@gmail.com</ExternalLink>. You
              can also find me on{" "}
              <ExternalLink
                href="https://twitter.com/ParssaKyanzadeh"
                imageHref="/preview/twitter-preview.png"
              >
                Twitter
              </ExternalLink>
              ,{" "}
              <ExternalLink
                imageHref="/preview/github-preview.png"
                href="https://www.github.com/parssak/"
              >
                GitHub
              </ExternalLink>
              , and{" "}
              <ExternalLink
                href="https://www.linkedin.com/in/parssa-kyanzadeh-255a5a180/"
                imageHref="/preview/linkedin-preview.png"
              >
                LinkedIn
              </ExternalLink>
            </Text>
          </section>
        </div>
      </div>
    </>
  );
}
