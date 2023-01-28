import { Text } from "@parssa/universal-ui";
import { ExperimentWrapper } from "components/ExperimentWrapper";
import React from "react";
import { cx } from "utils";

export const StargazingContainer = ({
  as = "div",
  ...props
}: DivProps & {
  as?: string;
  backgroundClasses?: string;
}) => {
  return React.createElement(as, {
    ...props,
    "data-dark": "true",
    "data-override": "true",
    "data-theme": "neutral",
    className: cx("bg-black", props.className)
  });
};

export default () => {
  return (
    <ExperimentWrapper description="stars in the sky">
      <StargazingContainer className="h-96 grid border border-theme-base/50 place-items-center rounded-xl">
        <Text>good night</Text>
      </StargazingContainer>
    </ExperimentWrapper>
  );
};
