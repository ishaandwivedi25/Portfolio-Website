'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function AnimatedReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.55, ease: [0.2, 0.65, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
