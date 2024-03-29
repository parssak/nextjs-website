import { Button, Text, TextProps, Tooltip } from "@parssa/universal-ui";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { cx } from "utils";

const Emojis = ({ didCopy }: { didCopy: boolean }) => {
  const emojisBase = [
    "✉️",
    "🦅",
    "📩",
    "📲",
    "📧",
    "📨",
    "📬",
    "📭",
    "🐥",
    "📪",
    "📫",
    "📥",
    "📤",
    "📦"
  ];

  const emojis = Array.from({ length: 40 }, () => {
    const emoji = emojisBase[Math.floor(Math.random() * emojisBase.length)];
    return emoji;
  });
  return (
    <div className="relative w-full h-full">
      {emojis.map((emoji, index) => {
        const isCheckMark = didCopy && Math.random() > 0.7;
        return (
          <span
            key={index}
            className={`block transform ease-spring transition-all bottom-0 absolute ${
              index % 2 === 0
                ? "group-hover:bottom-1/2"
                : index % 3 === 0
                ? "group-hover:bottom-2/3"
                : index % 5 === 0
                ? "group-hover:bottom-3/4"
                : "group-hover:bottom-1/4"
            }`}
            style={{
              transform: `scale(${isCheckMark ? Math.random() + 0.3 : Math.random() * 0.5 + 0.5}) 
                rotate(${Math.random() * 90 - 45}deg) 
                translateX(${Math.random() * 100 - 50}%) translateY(${Math.random() * 200 - 100}%)`,
              left: 8 * index,
              opacity: Math.random() * 0.5 + 0.5,
              transitionDuration: `${Math.random() * 200 + 1000}ms`
            }}
          >
            {isCheckMark ? "✅" : emoji}
          </span>
        );
      })}
    </div>
  );
};

const linkClasses = (className?: string) =>
  cx(
    // base
    "inline-block text-blue-500 dark:text-blue-300 ",
    "duration-200 ease-spring transition-all skew-x-1",
    // base -> hover
    "hover:hue-rotate-60",
    // "hover:-skew-x-6",
    // ::before (rect)
    "before:block before:absolute before:inset-y-0.5 before:-inset-x-0.5 before:scale-75",
    "before:rounded before:opacity-0 before:bg-sky-400/20",
    "before:duration-200 before:ease-spring",
    // ::before -> hover
    "hover:before:opacity-100 hover:before:scale-100",
    // ::after (underline)
    "after:absolute after:w-full after:bottom-0 after:rounded-full",
    "after:h-[1.5px] after:left-0 after:scale-x-95 after:-translate-y-1",
    "after:bg-blue-500 dark:after:bg-blue-300",
    "after:duration-200 after:ease-spring after:transition-all",
    // ::after -> hover
    "hover:after:scale-x-75 hover:after:translate-y-0 hover:after:opacity-80",
    "inline-flex items-center group",
    className
  );

export const ExternalLink = ({
  children,
  className,
  imageHref,
  ...props
}: {
  href: string;
} & React.HTMLAttributes<HTMLAnchorElement> & {
    imageHref?: string;
  } & TextProps) => {
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const showTooltipPanel =
    !!imageHref || props.href.includes("mailto") || props.href === "/experiments";
  const navigate = () => {
    if (typeof window !== "undefined") {
      if (props.href.startsWith("http")) {
        window.open(props.href, "_blank");
      } else {
        router.push(props.href);
      }
    }
  };

  const copy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText("parssak@gmail.com");
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  };

  return (
    <Tooltip.Root>
      <Tooltip.Trigger as="span">
        <Text
          {...props}
          as={props.href.startsWith("http") ? "a" : Link}
          // target="_blank"
          // rel="noopener noreferrer"
          // spread if it's a link
          {...(props.href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className={linkClasses(className)}
        >
          {children}

          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
              fill="currentColor"
              fillRule="evenodd"
              className="group-hover:translate-x-px group-hover:-translate-y-px transition-all ease-spring"
              clipRule="evenodd"
            ></path>
          </svg>
        </Text>
      </Tooltip.Trigger>
      <Tooltip.Content
        side="top"
        className={
          showTooltipPanel
            ? "backdrop-blur-xl duration-700 pl-0 pr-0 pt-0 w-64 h-36 aspect-video group overflow-hidden relative m-1"
            : "invisible hidden"
        }
        sideOffset={2}
      >
        {/* <a href={props.href} target="_blank" rel="noopener noreferrer">
          
        </a> */}

        {React.createElement(
          props.href.startsWith("http") ? "a" : Link,
          {
            ...props,
            href: props.href,
            ...(props.href.startsWith("https") && {
              rel: "noopener noreferrer",
              target: "_blank"
            })
          },
          <>
            {imageHref && (
              <Image
                alt={"Preview image for given link"}
                width={1457}
                height={918}
                src={imageHref}
                placeholder="blur"
                blurDataURL={imageHref}
                className="rounded object-cover w-full h-full transition-all group-hover:scale-110 ease-spring duration-500 group-hover:blur-md"
              />
            )}
            {props.href === "/experiments" && (
              <div className="p-size-4y group h-full text-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/30 to-green-800/50"></div>
                <div className="absolute inset-0 danger-zone opacity-20 mix-blend-multiply animate-repeat-x-slow"></div>
                <div className="relative grid place-items-center w-full h-full">
                  <Text className="relative text-3xl" variant="h4">
                    🧪
                  </Text>
                </div>
              </div>
            )}
            {props.href.includes("mailto") && (
              <div data-theme={copied ? "success" : "info"} className="h-36 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-theme-base to-theme-base/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-theme-base saturate-200 dark:saturate-100 to-theme-active opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <Emojis didCopy={copied} />
              </div>
            )}
            {props.href.includes("mailto") ? (
              <div className="absolute z-10 inset-0 flex items-center justify-center flex-col gap-size-y saturate-0 opacity-90 group-hover:opacity-100 group-hover:saturate-100 ease-spring duration-500 pointer-events-none transition-all">
                <Button
                  size="sm"
                  theme="info"
                  dark
                  onClick={navigate}
                  className="pl-size-2x backdrop-blur-lg pr-size-2x py-size-qy rounded-full bg-theme-base/90 transition-all hover:bg-theme-base cursor-pointer pointer-events-auto "
                >
                  Send Email
                </Button>
                <Button
                  size="sm"
                  theme={copied ? "success" : "warning"}
                  dark
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    copy();
                  }}
                  className="pl-size-2x backdrop-blur pr-size-2x py-size-qy rounded-full bg-theme-base/90 transition-all hover:bg-theme-base cursor-pointer pointer-events-auto"
                >
                  {copied ? "Copied Email!" : "Copy Email"}
                </Button>
              </div>
            ) : (
              <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 ease-spring duration-500 pointer-events-none">
                <Button
                  size="sm"
                  theme="info"
                  dark
                  className="pl-size-2x pr-size-2x py-size-qy rounded-full is-dark:bg-theme-base/50 transition-all hover:bg-theme-base cursor-pointer pointer-events-auto"
                  onClick={navigate}
                >
                  Visit &rarr;
                </Button>
              </div>
            )}
          </>
        )}
      </Tooltip.Content>
    </Tooltip.Root>
  );
};
