import styles from "@/styles/footer.module.css";
import clsx from "clsx";
import Logo from "./Logo";
type CompProps = {};

const Footer: React.FC<CompProps> = () => {
  return (
    <footer
      className={clsx(
        "fixed bottom-0 left-0 flex h-24 w-full select-none items-center justify-start border-t border-dashed p-8 font-serif",
        styles.footer
      )}
    >
      <a
        className="group flex h-16 items-center justify-center gap-6 text-lg tracking-wide"
        href="https://lunchb0ne.me/"
        target="_blank"
        rel="noreferrer"
      >
        <Logo />
        <h2 className="hover-underline-animation group-hover:after:origin-bottom-left group-hover:after:transform-gpu">
          Lunch&apos;s Explorations with Framer Motion
        </h2>
      </a>
    </footer>
  );
};

export default Footer;
