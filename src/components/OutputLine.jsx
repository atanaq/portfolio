import React from 'react';
import { motion } from 'framer-motion';

const OutputLine = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
      className="mb-2 text-terminal-text break-words"
    >
      {children}
    </motion.div>
  );
};

export default OutputLine;
