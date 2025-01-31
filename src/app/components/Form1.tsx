"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleForm = () => setIsLogin(!isLogin);

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="flex items-center justify-center p-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={formVariants}
        transition={{ duration: 0.4 }}
        className="relative w-[90%] max-w-xl bg-gray-800/60 backdrop-blur-lg p-8 border border-gray-700/30"
      >
        {/* Gradient border effect */}
        <div className="absolute inset-0 border border-transparent [mask:linear-gradient(black,#0000)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-indigo-500/20 before:to-purple-500/20 before:-z-10" />
        
        <div className="flex justify-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
        </div>

        <form className="space-y-5">
          <AnimatePresence mode="wait">
            {!isLogin && (
              <motion.div
                key="username"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative group">
                  <input
                    type="text"
                    id="username"
                    required
                    className="w-full px-4 py-3 bg-gray-700/40 text-sm text-white border-b-2 border-gray-600 focus:border-indigo-500 focus:outline-none transition-all"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label
                    htmlFor="username"
                    className="absolute left-4 top-3 text-gray-400 group-focus-within:-translate-y-5 group-focus-within:text-xs group-focus-within:text-indigo-300 transition-all pointer-events-none origin-left"
                  >
                    Username
                  </label>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative group">
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 bg-gray-700/40 text-sm text-white border-b-2 border-gray-600 focus:border-indigo-500 focus:outline-none transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-3 text-gray-400 group-focus-within:-translate-y-5 group-focus-within:text-xs group-focus-within:text-indigo-300 transition-all pointer-events-none origin-left"
            >
              Email
            </label>
          </div>

          <div className="relative group">
            <input
              type="password"
              id="password"
              required
              className="w-full px-4 py-3 bg-gray-700/40 text-sm text-white border-b-2 border-gray-600 focus:border-indigo-500 focus:outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-3 text-gray-400 group-focus-within:-translate-y-5 group-focus-within:text-xs group-focus-within:text-indigo-300 transition-all pointer-events-none origin-left"
            >
              Password
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors"
          >
            {isLogin ? 'Sign In' : 'Register'}
          </motion.button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={toggleForm}
            className="text-gray-400 hover:text-indigo-300 text-sm font-medium transition-colors group"
          >
            {isLogin ? 
              <>
                New user? <span className="text-indigo-400 group-hover:underline">Register now</span>
              </> : 
              <>
                Existing user? <span className="text-indigo-400 group-hover:underline">Sign in</span>
              </>
            }
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthForm;