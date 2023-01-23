import { Text } from "@parssa/universal-ui";
import React from "react";

export default () => {
  return (
    <div className="container pt-24">
      <Text variant="h1">Experiments</Text>
      <Text size="lg" className="my-size-2y leading-loose text-theme-muted/75">
        This page is a collection of experiments I've done in the past. <br />
        Some are still in progress, some are finished, and some are just ideas.
      </Text>
    </div>
  );
};
