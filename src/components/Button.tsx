import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import React from "react";

type ButtonTargetProps =
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
  | LinkProps;

function shouldRenderAsAnchor(
  props: ButtonTargetProps
): props is React.AnchorHTMLAttributes<HTMLAnchorElement> {
  return props.hasOwnProperty("href");
}
function shouldRenderAsLink(props: ButtonTargetProps): props is LinkProps {
  return props.hasOwnProperty("to");
}
export type Props = React.PropsWithChildren<
  { variant?: keyof typeof BUTTON_CLASSES } & ButtonTargetProps
>;
const BUTTON_CLASSES = {
  base: "inline-flex justify-center items-center",
  badge:
    "bg-spotify-lightest-gray text-sm hover:opacity-75 text-white active:bg-white active:text-black rounded-2xl px-3 py-1",
  green: "bg-spotify-green text-black p-3 rounded-full shadow-2xl",
  icon:
  "bg-spotify-lightest-gray text-sm hover:opacity-75 text-white active:bg-white active:text-black rounded-full p-2",
  invisible: "text-sm hover:opacity-75 text-white active:bg-white active:text-black rounded-full p-2"
};
function Button({ variant = "base", ...props }: Props): React.ReactElement {
  const className = clsx(
    variant !== "base" && BUTTON_CLASSES.base,
    BUTTON_CLASSES[variant],
    // @ts-ignore
    props.className
  );
  if (shouldRenderAsAnchor(props)) {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...props} className={className} />;
  }
  if (shouldRenderAsLink(props)) {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <Link {...props} className={className} />;
  }
  return <button {...props} className={className} />;
}
export default Button;
