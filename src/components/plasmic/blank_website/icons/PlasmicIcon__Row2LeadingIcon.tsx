/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Row2LeadingIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Row2LeadingIconIcon(props: Row2LeadingIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillOpacity={".5"}
        fillRule={"evenodd"}
        d={
          "M7 12.25a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5m0 1.167A6.417 6.417 0 1 0 7 .583a6.417 6.417 0 0 0 0 12.834"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Row2LeadingIconIcon;
/* prettier-ignore-end */
