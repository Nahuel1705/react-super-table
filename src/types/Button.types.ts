import React, { MouseEventHandler, ReactElement } from "react";

export type ButtonProps = {
  label?: string;
  onclick: MouseEventHandler;
  separator?: boolean;
  circle?: boolean;
  icon?: JSX.Element;
  margin?: string;
  fontSize?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
};
