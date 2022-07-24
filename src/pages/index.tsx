import { useThemeContext } from "@/lib/ThemeContext";
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Home = () => {
  const { setAccent, setBackground } = useThemeContext();

  React.useEffect(() => {
    setAccent("white");
    setBackground("black");
  });

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { translateX: "100vw" },
    show: {
      translateX: 0,
      transition: { type: "spring", bounce: 0.4 },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Motion Experiments</title>
      </Head>

      <section className="flex flex-col gap-12 px-10 tracking-wider">
        <motion.div variants={container} initial="hidden" animate="show">
          <h1 className="text-5xl font-bold">Welcome to Motion Experiments!</h1>
          <h3>
            Explore some cool things done via{" "}
            <a
              className="hover-underline-animation"
              href="https://github.com/framer/motion"
              target="_blank"
              rel="noreferrer"
            >
              <span className="after:content-['_↗']">framer-motion</span>
            </a>
          </h3>
        </motion.div>
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="text-7xl font-bold tracking-[-0.08em]"
        >
          <motion.li variants={item}>
            <Link
              href={"/webb"}
              className="hover-underline-animation after:h-2"
            >
              webb
            </Link>
          </motion.li>
          <motion.li className="mt-4" variants={item}>
            <Link
              href={"/chaser"}
              className="hover-underline-animation after:h-2"
            >
              chaser
            </Link>
          </motion.li>
        </motion.ul>
      </section>
    </div>
  );
};

export default Home;
