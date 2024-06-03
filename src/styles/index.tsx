import { useStyler } from "./styler";

const Styler: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useStyler();
  return <>{children}</>;
};

export default Styler;
