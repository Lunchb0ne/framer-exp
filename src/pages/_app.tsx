import Footer from "@/components/Footer";
import { ThemeProvider } from "@/lib/ThemeContext";
import type { AppProps } from "next/app";
import { AnimatePresence, motion, Variants } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  const container: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        default: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        },
        scale: {
          type: "spring",
          duration: 0.5,
          bounce: 0.4,
        },
      },
    },
  };
  return (
    /* Footer is set to h-24 in footer comp, so calc the correct page size */
    <>
      <ThemeProvider>
        <motion.main
          key={router.pathname}
          initial="hidden"
          animate="show"
          variants={container}
          className="flex min-h-screen items-center justify-center pb-24 antialiased"
        >
          <Component {...pageProps} />
        </motion.main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
