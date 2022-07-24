import Footer from "@/components/Footer";
import { ThemeProvider } from "@/lib/ThemeContext";
import type { AppProps } from "next/app";
import { AnimatePresence, motion, Variants } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
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
