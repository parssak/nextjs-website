import { Card, Text } from "@parssa/universal-ui";
import { ExperimentWrapper } from "components/ExperimentWrapper";

import Link from "next/link";
import React from "react";
import { cx } from "utils";

import { TODContainer } from "./time-of-day";
import { StargazingContainer } from "./stargazing";

const ExperimentCard = ({
  href,
  description,
  className,
  ...props
}: DivProps & {
  href: string;
  description: string;
}) => {
  return (
    <Card
      as={Link}
      href={href}
      className={cx("overflow-hidden rounded-xl  border-theme-muted p-2", className)}
    >
      <div {...props} className="rounded-lg overflow-hidden border border-theme-muted" />
      <Text size="sm" className='pt-4 pb-2 border-theme-muted leading-none'>{description}</Text>
    </Card>
  );
};
export default () => {
  return (
    <ExperimentWrapper description="where i try out new ideas">
      <div className="grid gap-size-x md:grid-cols-3 mt-size-8y">
        <ExperimentCard
          href="/experiments/time-of-day"
          description={"adaptive background based on time of day"}
        >
          <TODContainer
            className="p-size-4y group h-48 grid place-items-center text-center"
            backgroundClasses="group-hover:scale-110 transition-all duration-500"
          >
            <Text variant="h4">time of day</Text>
          </TODContainer>
        </ExperimentCard>
        <ExperimentCard
          href="/experiments/stargazing"
          description={"stars in the sky"}
        >
          <StargazingContainer
            className="p-size-4y group h-48 grid place-items-center text-center"
            backgroundClasses="group-hover:scale-110 transition-all duration-500"
          >
            <Text variant="h4">stargazing</Text>
          </StargazingContainer>
        </ExperimentCard>

        {/* <Link href="/experiments/loader">
          <div className="p-size-4y group h-48 grid place-items-center text-center">
            <Loader />
          </div>
        </Link> */}
      </div>
    </ExperimentWrapper>
  );
};
