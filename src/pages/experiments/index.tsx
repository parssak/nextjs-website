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
      // theme='brand'
      // dark={true}
      // data-override='true'
      className={cx(
        "overflow-hidden bg-gradient-to-t from-theme-active/20 to-theme-active/50 rounded-xl border-theme-muted p-2 select-none",
        className
      )}
    >
      <div {...props} className="rounded-lg overflow-hidden border border-theme-muted" />
      <Text size="sm" className="pt-4 pb-2 border-theme-muted leading-none">
        {description}
      </Text>
    </Card>
  );
};
export default () => {
  return (
    <ExperimentWrapper description="where i try out new ideas">
      <div className="grid gap-size-x md:grid-cols-2 lg:grid-cols-3 mt-size-8y">
        <ExperimentCard
          href="/experiments/time-of-day"
          description={"adaptive based on time of day"}
        >
          <TODContainer
            className="p-size-4y group h-48 grid place-items-center text-center"
            backgroundClasses="group-hover:scale-110 transition-all duration-500"
          >
            <Text variant="h4">time of day</Text>
          </TODContainer>
        </ExperimentCard>
        <ExperimentCard href="/experiments/stargazing" description={"stars in the sky"}>
          <StargazingContainer
            className="p-size-4y group h-48 grid place-items-center text-center"
            backgroundClasses="group-hover:scale-110 transition-all duration-500"
          >
            <Text variant="h4">stargazing</Text>
          </StargazingContainer>
        </ExperimentCard>

        <ExperimentCard href="/experiments" description={"more coming soon!"}>
          <div className="p-size-4y group h-48 text-center relative">
            <div
              data-theme="warning"
              className="absolute inset-0 bg-gradient-to-t from-amber-500/30 to-orange-800/50"
            ></div>
            <div className="absolute inset-0 danger-zone opacity-20 mix-blend-multiply animate-repeat-x-slow"></div>
            <div className="relative grid place-items-center w-full h-full">
              <Text className="absolute blur-lg text-4xl" variant="h4">
                🚧
              </Text>
              <Text className="relative text-3xl" variant="h4">
                🚧
              </Text>
            </div>
          </div>
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
