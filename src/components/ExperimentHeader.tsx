import { useRouter } from "next/router";
import React from "react";
import { cx } from "utils";

export const ExperimentHeader = ({
  ...props
}: Omit<DivProps, "title"> & {
  title: string;
}) => {
  const router = useRouter();
  const location = router.pathname;

  const breadcrumbs = location.split("/").filter(Boolean);
  return (
    <div {...props} className={cx('container py-4 mt-6', props.className)}>
      {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;
        return (
          <span key={crumb}>
            <a
              href={`/${breadcrumbs.slice(0, index + 1).join("/")}`}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              {crumb}
            </a>
            {!isLast && <span className="mx-1">/</span>}
          </span>
        );
      })}
    </div>
  );
};
