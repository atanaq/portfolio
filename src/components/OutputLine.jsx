import React from 'react';
import { motion } from 'framer-motion';
import TypeWriter from './TypeWriter';

const OutputLine = ({ children, enableTyping = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
      className="mb-2 text-terminal-text break-words"
    >
      {enableTyping ? <TypeWriter>{children}</TypeWriter> : children}
    </motion.div>
  );
};

export default OutputLine;