import { Text } from "@parssa/universal-ui";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { cx } from "utils";
import { FancyGradient } from "./FancyGradient";
import { HeaderSection } from "./HeaderSection";

export const ExperimentWrapper = ({
  children,
  ...props
}: DivProps & { description: React.ReactNode }) => {
  const router = useRouter();
  const location = router.pathname;

  const INDEX = "parssak";
  const breadcrumbs = [INDEX, ...location.split("/").filter(Boolean)];

  return (
    <div {...props} className={cx("container pt-12", props.className)}>
      <FancyGradient className="grayscale" />
      <div className="relative group">
        <div className="danger-zone absolute opacity-5 dark:opacity-[.15] -inset-2 rounded-xl" />
        <div className="relative ">
          <HeaderSection
            hideBorder
            title={
              <div className="flex-shrink-0">
                {breadcrumbs.map((crumb, index) => {
                  const isLast = index === breadcrumbs.length - 1;
                  const href =
                    crumb === INDEX
                      ? "/"
                      : `${breadcrumbs
                          .slice(0, index + 1)
                          .join("/")
                          .replace(INDEX, "")
                          .replaceAll("//", "/")}`;

                  return (
                    <span key={crumb}>
                      <Text
                        as={Link}
                        href={href}
                        className={cx(
                          isLast
                            ? "text-theme-active"
                            : "text-theme-muted hover:text-theme-active transition-all active:scale-95 select-none",
                          "inline-block select-none"
                        )}
                      >
                        {crumb.replace(/-/g, " ")}
                      </Text>
                      {!isLast && (
                        <Text className="mx-1 inline text-theme-muted/50 select-none pointer-events-none">
                          /
                        </Text>
                      )}
                    </span>
                  );
                })}
              </div>
            }
            subtitle={props.description}
          />
        </div>
      </div>
      <div className="pt-12 relative">{children}</div>
    </div>
  );
};
