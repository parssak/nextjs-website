import { Card, Text } from "@parssa/universal-ui";
import React from "react";
import { cx } from "utils";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export const WIPCallout = ({ children, ...props }: DivProps & {}) => {
  return (
    <Card theme="warning" {...props} className={cx("border-0", props.className)}>
      <Card.Content>
        <Text variant="h6">
          <span className="inline-block mr-2">🚧</span> Under Construction
          <span className="hidden md:inline">:</span> <br className="md:hidden" />{" "}
          <span className="font-normal mt-1 block md:inline">{children}</span>
        </Text>
      </Card.Content>
    </Card>
  );
};
