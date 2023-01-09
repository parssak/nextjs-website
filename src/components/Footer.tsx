import { Text } from "@parssa/universal-ui";
import React from "react";
import { ExternalLink } from "./ExternalLink";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export const Footer = ({ ...props }: DivProps & {}) => {
  return (
    <footer {...props} className="py-size-2y border-t border-theme-base/20 container">
      <Text size="xs" className="text-theme-base/50">
        Made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by{" "}
        <ExternalLink
          imageHref="/preview/twitter-preview.png"
          href="https://twitter.com/ParssaKyanzadeh"
        >
          Parssa Kyanzadeh
        </ExternalLink>
      </Text>
    </footer>
  );
};
