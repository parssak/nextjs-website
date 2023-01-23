import { Text } from "@parssa/universal-ui";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { cx } from "utils";

export const ExperimentHeader = ({ ...props }: DivProps & {}) => {
  const router = useRouter();
  const location = router.pathname;

  const breadcrumbs = [...location.split("/").filter(Boolean)];
  return (
    <div {...props} className={cx("container pt-6", props.className)}>
      <Text as={Link} href="/" variant="h4">
        parssa <span className='text-theme-muted/50 animate-gold-text'>kyanzadeh</span>
      </Text>
      <div>
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <span key={crumb}>
              <Text
                as={Link}
                href={crumb === "home" ? "/" : `/${breadcrumbs.slice(0, index + 1).join("/")}`}
                // theme="info"
                className={cx(
                  isLast ? "" : "text-theme-muted/50 hover:text-theme-muted/100 transition-all",
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
    </div>
  );
};
