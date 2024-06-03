export const styles = {
  body: "bg-$neutral-950 tc-$neutral-50",
  button: "outline-none border-none bg-none tc-inherit",
  a: "tc-inherit td-none",
  p: ".text-base tc-$neutral-400",
  span: "fs-inherit",
  div: "bg-color-unset",
  "button:focus": "border-[2px\\_solid\\_red]",
  //? components
  ".nav-links": {
    a: "tc-$neutral-400 bw-0 bw-bottom-1px bs-solid bc-transparent hover:tc-$neutral-300 hover:bc-$primary-500 .transition-color tr-time-0.3s",
    "a.active": "tc-$neutral-100 bc-$primary-500 hover:tc-currentColor hover:bc-$primary-700"
  },
  //? utility
  // random
  ".center": "flex-parent-center",
  ".flex.col": "fd-column",
  ".flex.wrap": "flex-wrap-wrap",
  ".flex.space": "ai-center jc-[space-between]",
  ".w-full": "w-100%",
  ".h-full": "h-100%",
  // display
  ".block": "d-block",
  ".inline-block": "d-[inline-block]",
  ".inline": "d-inline",
  ".flex": "d-flex",
  ".inline-flex": "d-[inline-flex]",
  // position
  ".static": "position-static",
  ".fixed": "position-fixed",
  ".absolute": "position-absolute",
  ".relative": "position-relative",
  ".sticky": "position-sticky",
  // font size
  ".text-xs": "fs-0.75rem lh-1rem",
  ".text-sm": "fs-0.875rem lh-1.25rem",
  ".text-base": "fs-1rem lh-1.5rem",
  ".text-lg": "fs-1.125rem lh-1.75rem",
  ".text-xl": "fs-1.25rem lh-1.75rem",
  ".text-2xl": "fs-1.5rem lh-2rem",
  ".text-3xl": "fs-1.875rem lh-2.25rem",
  ".text-4xl": "fs-2.25rem lh-2.5rem",
  ".text-5xl": "fs-3rem lh-1",
  ".text-6xl": "fs-3.75rem lh-1",
  ".text-7xl": "fs-4.5rem lh-1",
  ".text-8xl": "fs-6rem lh-1",
  ".text-9xl": "fs-8rem lh-1",
  // font style
  ".italic": "font-s-italic",
  ".not-italic": "font-s-normal",
  // font weight
  ".font-thin": "fw-100",
  ".font-extralight": "fw-200",
  ".font-light": "fw-300",
  ".font-normal": "fw-400",
  ".font-medium": "fw-500",
  ".font-semibold": "fw-600",
  ".font-bold": "fw-700",
  ".font-extrabold": "fw-800",
  ".font-black": "fw-900",
  // Text decoration
  ".underline": "td-li-underline",
  ".overline": "td-li-overline",
  ".line-through": "td-li-line-through",
  ".no-underline": "td-li-none",
  // radius
  ".rounded-none": "br-0px",
  ".rounded-sm": "br-0.125rem",
  ".rounded": "br-0.25rem",
  ".rounded-md": "br-0.375rem",
  ".rounded-lg": "br-0.5rem",
  ".rounded-xl": "br-0.75rem",
  ".rounded-2xl": "br-1rem",
  ".rounded-3xl": "br-1.5rem",
  ".rounded-full": "br-9999px",
  // transition
  ".transition-color": "tr-prop-[color,\\_background-color,\\_border-color]",
  //? components
  // button
  ".btn":
    ".text-base .font-medium .rounded-md .inline-flex .center gap-2px white-space-nowrap h-36px px-12px .transition-color tr-time-0.3s",
  ".btn.icons": "box-36px",
  ".btn span[class*='ms-']": ".text-lg",
  ".btn-secondary": "tc-$neutral-950 bg-$neutral-50 hover:bg-$neutral-300",
  ".btn-secondary-dark": "tc-$neutral-50 bg-$neutral-950 hover:bg-$neutral-800",
  ".btn-ghost": "bw-2px bs-solid bc-$neutral-900 hover:bg-$neutral-900",
  ".btn-primary": "bg-$blue-600 hover:bg-$blue-800",
  // badge
  ".badge":
    ".inline-flex ai-center .rounded-full border px-10px py-2px .text-xs .font-medium .transition-color gap-2px",
  ".badge-default": "bg-$neutral-50 tc-$neutral-950 hover:bg-$neutral-300",
  ".badge-primary": "bg-$neutral-900 tc-$neutral-200 hover:bg-$neutral-300",

  // execute class
  ".none": "d-none"
};
