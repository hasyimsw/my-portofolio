import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="bg-gray-200 my-20 h-16 w-1 rounded-full hidden sm:block"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
      ></motion.div>
    </div>
  );
}
