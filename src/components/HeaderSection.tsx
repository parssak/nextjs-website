import { Text } from "@parssa/universal-ui";

export const HeaderSection = ({
  title,
  subtitle,
  className,
  ...props
}: {
  title: React.ReactNode;
  subtitle: React.ReactNode;
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
        className="border-t border-dashed border-theme-base/30 w-full mx-8 hidden md:block"
        aria-hidden="true"
      />
      <Text className="flex-shrink-0 opacity-80">{subtitle}</Text>
    </div>
  );
};
