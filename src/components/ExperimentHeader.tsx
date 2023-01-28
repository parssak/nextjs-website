import { Text } from "@parssa/universal-ui";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { cx } from "utils";
import { FancyGradient } from "./FancyGradient";
import { HeaderSection } from "./HeaderSection";

export const ExperimentHeader = ({ ...props }: DivProps & {}) => {
  const router = useRouter();
  const location = router.pathname;

  const breadcrumbs = ["home", ...location.split("/").filter(Boolean)];
  return (
    <div {...props} className={cx("container pt-6", props.className)}>
      <FancyGradient className="grayscale" />
      <div className="relative">
        <HeaderSection
          title={
            <div className="flex-shrink-0">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <span key={crumb}>
                    <Text
                      as={Link}
                      href={
                        crumb === "home"
                          ? "/"
                          : `/${breadcrumbs
                              .slice(0, index + 1)
                              .join("/")
                              .replace("home", "")}`
                      }
                      className={cx(
                        isLast
                          ? ""
                          : "text-theme-muted/50 hover:text-theme-muted/100 transition-all active:scale-95 select-none",
                        "inline-block"
                      )}
                    >
                      {crumb.replace(/-/g, " ")}
                    </Text>
                    {!isLast && <Text className="mx-1 inline text-theme-muted/50">/</Text>}
                  </span>
                );
              })}
            </div>
          }
          subtitle="Experiment"
        />
      </div>
    </div>
  );
};
