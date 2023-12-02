import { cn } from "@/lib/utils";
import React from "react";
type PropsToOmit<C extends React.ElementType, P> = keyof (P & AsProp<C>);

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PropsType<C extends React.ElementType, P> = PolymorphicComponentProps<
  C,
  P
>;

const Container = React.forwardRef(
  <C extends React.ElementType = "div">({
    as,
    children,
    className,
    ...restProps
  }: PropsType<C, {}>) => {
    const Component = as || "div";

    return (
      <Component
        className={cn(
          "max-w-[1440px] mx-auto px-2 md:px-10 lg:px-16",
          className
        )}
        {...restProps}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "MyContainer";
export default Container;
