import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
      animate={{ rotate: theme === 'dark' ? 180 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <motion.div
        initial={false}
        animate={{ opacity: theme === 'dark' ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ opacity: theme === 'light' ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center"
      >
        <Sun className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      </motion.div>
    </motion.button>
  );
};