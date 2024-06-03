import { useStyler } from "../styles/styler";

const Footer = () => {
  useStyler();
  return (
    <footer className="w-mx-1440px mx-auto p-2rem flex center max-md:jc-center md:jc-[flex-start]">
      <p className="text-xs tc-$neutral-400">
        &copy; 2024 NOuSantx. Built with{" "}
        <a
          href="https://tenoxui.web.app"
          className="tc-$neutral-50 td-li-underline td-c-$primary-500 hover:td-li-none tr-time-0.3s hover:tc-$neutral-300"
        >
          tenoxui/css
        </a>
        . Design by{" "}
        <a
          href="https://ui.shadcn.com"
          className="tc-$neutral-50 td-li-underline td-c-$primary-500 hover:td-li-none tr-time-0.3s hover:tc-$neutral-300"
        >
          shadcn
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
