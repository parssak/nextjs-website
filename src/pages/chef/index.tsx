import { Button, Text } from "@parssa/universal-ui";
import Link from "next/link";
import React from "react";

export default () => {
  return (
    <div className="container py-24">
      <Text variant="h1">Basic Minion UI Test</Text>
      <Text>Sanity checks for actions of increasing difficulty.</Text>

      <Text variant="h3" as="h2" className="mt-size-4y">
        Basic
      </Text>
      <div className="mt-size-2y flex gap-3">
        <Button href="/chef/button" as={Link}>
          Button
        </Button>
        <Button href="/chef/button" as={Link}>
          Input
        </Button>
      </div>
      <Text variant="h3" as="h2" className="mt-size-4y">
        Dynamic
      </Text>
      <div className="mt-size-2y flex gap-3">
        <Button href="/chef/popover" as={Link}>
          Popover
        </Button>
        <Button href="/chef/select" as={Link}>
          Select
        </Button>
        <Button href="/chef/calendar" as={Link}>
          Calendar
        </Button>
      </div>
    </div>
  );
};
