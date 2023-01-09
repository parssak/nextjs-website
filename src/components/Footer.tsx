import { Text } from "@parssa/universal-ui";
import React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export const Footer = ({ ...props }: DivProps & {}) => {
  return (
    <footer {...props} className="py-size-2y border-t border-theme-base/20 container">
      <Text size="xs" className="text-theme-base/50">
        Parssa Kyanzadeh &copy; 2023
      </Text>
    </footer>
  );
};
