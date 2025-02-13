"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GlassAuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleForm = () => setIsLogin(!isLogin);

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-md space-y-6"
      >
        <div className="flex justify-center">
          <h2 className="text-2xl font-light text-white/80">
            {isLogin ? 'Access Portal' : 'Join Network'}
          </h2>
        </div>

        <form className="space-y-4">
          <AnimatePresence mode="wait">
            {!isLogin && (
              <motion.div
                key="username"
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="relative"
              >
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full px-3 py-2.5 bg-white/5 backdrop-blur-lg text-sm text-white/80 placeholder-transparent border border-white/10 rounded-lg focus:border-white/20 focus:ring-0 peer"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label className="absolute left-3 -top-2.5 px-1 text-xs text-white/50 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-2.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-white/50 bg-transparent pointer-events-none">
                  Username
                </label>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2.5 bg-white/5 backdrop-blur-lg text-sm text-white/80 placeholder-transparent border border-white/10 rounded-lg focus:border-white/20 focus:ring-0 peer"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="absolute left-3 -top-2.5 px-1 text-xs text-white/50 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-2.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-white/50 bg-transparent pointer-events-none">
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2.5 bg-white/5 backdrop-blur-lg text-sm text-white/80 placeholder-transparent border border-white/10 rounded-lg focus:border-white/20 focus:ring-0 peer"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="absolute left-3 -top-2.5 px-1 text-xs text-white/50 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-2.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-white/50 bg-transparent pointer-events-none">
              Password
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-2.5 text-sm font-medium text-white/80 bg-white/10 border border-white/10 rounded-lg hover:bg-white/15 transition-all"
          >
            {isLogin ? 'Authenticate' : 'Initialize'}
          </motion.button>
        </form>

        <div className="text-center">
          <button
            onClick={toggleForm}
            className="text-xs text-white/50 hover:text-white/70 transition-colors"
          >
            {isLogin 
              ? 'Require access? ▸ Register'
              : 'Existing member? ▸ Login'}
          </button>
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(180deg,transparent,rgba(0,0,0,0.8))] bg-grid-white/[0.04]" />
      </motion.div>
    </div>
  );
};

export default GlassAuthForm;