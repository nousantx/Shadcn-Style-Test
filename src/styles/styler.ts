import { useLayoutEffect } from "react";
import tenoxui, { use, makeStyles } from "tenoxui";
import property from "@tenoxui/property";
import { styles } from "./lib/styles.ts";

export const styler = () => {
  use({
    property: [
      property,
      {
        all: "all",
        border: "border",
        bc: "borderColor",
        outline: "outline",
        tw: "textWrap",
        shadow: "boxShadow",
        "td-li": "textDecorationLine",
        "td-c": "textDecorationColor",
        "bg-color": "backgroundColor"
      }
    ]
  });

  makeStyles(styles);

  tenoxui();
};

export const useStyler = (...deps: any) => {
  useLayoutEffect(() => {
    styler();
  }, [deps]);
};
