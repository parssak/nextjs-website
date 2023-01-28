import { Text } from "@parssa/universal-ui";
import { cx } from "utils";

export const HeaderSection = ({
  title,
  subtitle,
  hideBorder = false,
  className,
  ...props
}: {
  title: React.ReactNode;
    subtitle: React.ReactNode;
  hideBorder?: boolean;
} & Omit<Omit<DivProps, "children">, "title">) => {
  return (
    <div
      {...props}
      className={`flex items-start md:items-center flex-col md:flex-row mb-size-2y relative 
      ${className ?? ""}`}
    >
      {typeof title === "string" ? (
        <Text className="flex-shrink-0" variant="h2">
          {title}
        </Text>
      ) : (
        title
      )}
      <div
        className={cx("border-t border-dashed border-theme-base/30 w-full mx-8 hidden md:block", hideBorder ? "invisible" : "")}
        aria-hidden="true"
      />
      <Text className="flex-shrink-0 opacity-80 italic">{subtitle}</Text>
    </div>
  );
};
