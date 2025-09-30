"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Footer from "../footer";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const buttonHover = {
  scale: 1.05,
  boxShadow: "0px 0px 25px rgba(168, 85, 247, 0.8)",
  transition: { type: "spring", stiffness: 400, damping: 10 },
};

const floatingAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [backgroundType, setBackgroundType] = useState("nebula"); // Default background

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setFormSubmitted(true);
  };

  // Fixed particles initialization
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Different particle configurations for different backgrounds
  const particlesOptions = {
    nebula: {
      background: { color: "#0b0a1a" },
      fpsLimit: 120,
      particles: {
        number: {
          value: 80,
          density: { enable: true, value_area: 800 },
        },
        color: {
          value: ["#A855F7", "#EC4899", "#8B5CF6", "#F59E0B", "#10B981"],
        },
        shape: {
          type: ["circle", "polygon"],
          polygon: { nb_sides: 6 },
        },
        opacity: {
          value: 0.4,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.1 },
        },
        size: {
          value: { min: 1, max: 5 },
          random: true,
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          out_mode: "bounce",
          random: true,
          straight: false,
          attract: { enable: true, rotateX: 600, rotateY: 1200 },
        },
        links: {
          enable: true,
          distance: 150,
          color: "#8B5CF6",
          opacity: 0.3,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { particles_nb: 4 },
        },
      },
      detectRetina: true,
    },
    galaxy: {
      background: { color: "#05051f" },
      fpsLimit: 120,
      particles: {
        number: {
          value: 150,
          density: { enable: true, value_area: 800 },
        },
        color: {
          value: [
            "#6366F1",
            "#8B5CF6",
            "#EC4899",
            "#F59E0B",
            "#10B981",
            "#3B82F6",
          ],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.7,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.1 },
        },
        size: {
          value: { min: 1, max: 3 },
          random: true,
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          out_mode: "bounce",
          random: true,
          straight: false,
          attract: { enable: true, rotateX: 600, rotateY: 1200 },
        },
        links: {
          enable: true,
          distance: 100,
          color: "#6366F1",
          opacity: 0.2,
          width: 1,
        },
        twinkle: {
          particles: {
            enable: true,
            color: "#FFFFFF",
            frequency: 0.05,
            opacity: 1,
          },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "bubble" },
          onClick: { enable: true, mode: "repulse" },
        },
        modes: {
          bubble: { distance: 200, size: 6, duration: 2, opacity: 0.8 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      detectRetina: true,
    },
    aurora: {
      background: { color: "#0c1445" },
      fpsLimit: 120,
      particles: {
        number: {
          value: 60,
          density: { enable: true, value_area: 800 },
        },
        color: {
          value: ["#10B981", "#3B82F6", "#8B5CF6", "#EC4899"],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.8,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.3 },
        },
        size: {
          value: { min: 2, max: 6 },
          random: true,
        },
        move: {
          enable: true,
          speed: 0.3,
          direction: "top",
          out_mode: "out",
          random: true,
          straight: false,
          attract: { enable: false },
        },
        line_linked: {
          enable: true,
          distance: 200,
          color: "#10B981",
          opacity: 0.2,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "bubble" },
        },
        modes: {
          grab: { distance: 200, line_linked: { opacity: 0.5 } },
          bubble: { distance: 200, size: 8, duration: 2, opacity: 0.8 },
        },
      },
      detectRetina: true,
    },
    cyber: {
      background: { color: "#000000" },
      fpsLimit: 120,
      particles: {
        number: {
          value: 100,
          density: { enable: true, value_area: 800 },
        },
        color: {
          value: "#00FFFF",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.1 },
        },
        size: {
          value: { min: 1, max: 3 },
          random: true,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          out_mode: "out",
          random: true,
          straight: false,
          attract: { enable: false },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#00FFFF",
          opacity: 0.2,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { particles_nb: 4 },
        },
      },
      detectRetina: true,
    },
  };

  // Background gradients for different themes
  const backgroundGradients = {
    nebula: "bg-gradient-to-br from-[#0b0a1a] via-[#1a103d] to-[#0b0a1a]",
    galaxy: "bg-gradient-to-br from-[#05051f] via-[#1a103d] to-[#0f0f2d]",
    aurora: "bg-gradient-to-br from-[#0c1445] via-[#1e3a8a] to-[#0f172a]",
    cyber: "bg-gradient-to-br from-black via-[#0f172a] to-[#1e3a8a]",
  };

  // Animated overlay gradients
  const animatedOverlays = {
    nebula:
      "bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 animate-pulse",
    galaxy:
      "bg-gradient-to-br from-indigo-900/30 via-transparent to-purple-900/30 animate-pulse",
    aurora:
      "bg-gradient-to-br from-green-900/20 via-blue-900/20 to-purple-900/20 animate-pulse",
    cyber:
      "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-blue-500/10 animate-pulse",
  };

  return (
    <div
      className={`relative min-h-screen ${backgroundGradients[backgroundType]} text-white flex flex-col justify-between overflow-hidden`}
    >
      {/* Background selector - positioned discreetly */}
      <div className="absolute top-4 right-4 z-20">
        <select
          value={backgroundType}
          onChange={(e) => setBackgroundType(e.target.value)}
          className="bg-black/50 backdrop-blur-md text-white px-3 py-2 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="nebula">Nebula</option>
          <option value="galaxy">Galaxy</option>
          <option value="aurora">Aurora</option>
          <option value="cyber">Cyber</option>
        </select>
      </div>

      {/* Animated Background Gradient */}
      <div
        className={`absolute inset-0 ${animatedOverlays[backgroundType]}`}
      ></div>

      {/* Floating Elements */}
      {backgroundType === "nebula" && (
        <>
          <motion.div
            className="absolute top-20 left-10 w-6 h-6 bg-purple-500 rounded-full blur-xl opacity-40"
            {...floatingAnimation}
          />
          <motion.div
            className="absolute bottom-40 right-20 w-8 h-8 bg-pink-500 rounded-full blur-xl opacity-30"
            {...floatingAnimation}
            animate={{
              ...floatingAnimation.animate,
              transition: { ...floatingAnimation.animate.transition, delay: 2 },
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-4 h-4 bg-yellow-400 rounded-full blur-lg opacity-50"
            {...floatingAnimation}
            animate={{
              ...floatingAnimation.animate,
              transition: { ...floatingAnimation.animate.transition, delay: 1 },
            }}
          />
        </>
      )}

      {backgroundType === "galaxy" && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/5 w-10 h-10 bg-indigo-500 rounded-full blur-xl opacity-20"
            {...floatingAnimation}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-purple-500 rounded-full blur-xl opacity-15"
            {...floatingAnimation}
            animate={{
              ...floatingAnimation.animate,
              transition: {
                ...floatingAnimation.animate.transition,
                delay: 1.5,
              },
            }}
          />
          <motion.div
            className="absolute top-2/3 left-1/3 w-8 h-8 bg-blue-400 rounded-full blur-lg opacity-25"
            {...floatingAnimation}
            animate={{
              ...floatingAnimation.animate,
              transition: {
                ...floatingAnimation.animate.transition,
                delay: 0.5,
              },
            }}
          />
        </>
      )}

      {backgroundType === "aurora" && (
        <>
          <motion.div
            className="absolute top-1/3 left-1/4 w-14 h-14 bg-green-500 rounded-full blur-2xl opacity-10"
            {...floatingAnimation}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/5 w-16 h-16 bg-blue-500 rounded-full blur-2xl opacity-10"
            {...floatingAnimation}
            animate={{
              ...floatingAnimation.animate,
              transition: { ...floatingAnimation.animate.transition, delay: 1 },
            }}
          />
          <motion.div
            className="absolute top-2/3 left-2/3 w-12 h-12 bg-teal-400 rounded-full blur-xl opacity-15"
            {...floatingAnimation}
            animate={{
              ...floatingAnimation.animate,
              transition: { ...floatingAnimation.animate.transition, delay: 2 },
            }}
          />
        </>
      )}

      {backgroundType === "cyber" && (
        <>
          <motion.div
            className="absolute top-20 left-20 w-4 h-20 bg-cyan-500 rounded-full blur-lg opacity-30"
            animate={{
              rotate: [0, 180, 360],
              transition: { duration: 8, repeat: Infinity, ease: "linear" },
            }}
          />
          <motion.div
            className="absolute bottom-40 right-40 w-20 h-4 bg-cyan-500 rounded-full blur-lg opacity-30"
            animate={{
              rotate: [0, -180, -360],
              transition: { duration: 6, repeat: Infinity, ease: "linear" },
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-6 h-6 bg-blue-500 rounded-full blur-md opacity-40"
            animate={{
              scale: [1, 1.5, 1],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </>
      )}

      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions[backgroundType]}
      />

      <motion.main
        className="relative mx-auto max-w-4xl p-6 sm:p-12 z-10 w-full"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <motion.h1
            className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300 bg-clip-text text-transparent"
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
          >
            Let's Connect
          </motion.h1>
          <motion.p
            className="text-xl text-purple-200 max-w-2xl mx-auto leading-relaxed"
            variants={fadeUp}
          >
            Ready to bring your ideas to life? We'd love to hear about your
            project and help you create something amazing.
          </motion.p>
        </motion.div>

        {!formSubmitted ? (
          <motion.div
            className="flex flex-col lg:flex-row gap-12 items-start"
            variants={fadeUp}
          >
            {/* Contact Info Cards */}
            <motion.div className="lg:w-2/5 space-y-6" variants={stagger}>
              <motion.div
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                variants={fadeUp}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-purple-200">hello@example.com</p>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-yellow-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                variants={fadeUp}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Chat With Us
                </h3>
                <p className="text-purple-200">24/7 customer support</p>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                variants={fadeUp}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-purple-200">
                  123 Creative Street, Digital City
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="lg:w-3/5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-10 rounded-3xl border border-white/20 shadow-2xl shadow-purple-500/20"
              variants={fadeUp}
            >
              <div className="space-y-8">
                {/* Name Field */}
                <motion.label
                  className="relative flex flex-col group"
                  variants={fadeUp}
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="peer rounded-2xl border-2 border-white/20 bg-white/5 px-6 py-4 text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300 text-lg"
                    placeholder="Your Name"
                  />
                  <span className="absolute left-6 top-[-12px] bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full text-sm font-medium text-white shadow-lg transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/50 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0 peer-focus:top-[-12px] peer-focus:text-white peer-focus:text-sm peer-focus:bg-gradient-to-r peer-focus:from-purple-600 peer-focus:to-pink-600 peer-focus:px-3">
                    Name
                  </span>
                </motion.label>

                {/* Email Field */}
                <motion.label
                  className="relative flex flex-col group"
                  variants={fadeUp}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="peer rounded-2xl border-2 border-white/20 bg-white/5 px-6 py-4 text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300 text-lg"
                    placeholder="your.email@example.com"
                  />
                  <span className="absolute left-6 top-[-12px] bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full text-sm font-medium text-white shadow-lg transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/50 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0 peer-focus:top-[-12px] peer-focus:text-white peer-focus:text-sm peer-focus:bg-gradient-to-r peer-focus:from-purple-600 peer-focus:to-pink-600 peer-focus:px-3">
                    Email
                  </span>
                </motion.label>

                {/* Message Field */}
                <motion.label
                  className="relative flex flex-col group"
                  variants={fadeUp}
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="peer rounded-2xl border-2 border-white/20 bg-white/5 px-6 py-4 text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300 text-lg resize-none"
                    placeholder="Tell us about your project..."
                  />
                  <span className="absolute left-6 top-[-12px] bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full text-sm font-medium text-white shadow-lg transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/50 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0 peer-focus:top-[-12px] peer-focus:text-white peer-focus:text-sm peer-focus:bg-gradient-to-r peer-focus:from-purple-600 peer-focus:to-pink-600 peer-focus:px-3">
                    Message
                  </span>
                </motion.label>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? buttonHover : {}}
                  whileTap={{ scale: 0.95 }}
                  className="w-full relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] px-10 py-5 font-bold text-white shadow-2xl text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <motion.div
                      className="flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-3"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      Sending...
                    </motion.div>
                  ) : (
                    "Send Message 🚀"
                  )}
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8, type: "spring" },
            }}
          >
            <motion.div
              className="w-32 h-32 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ✨
            </motion.div>
            <motion.h2
              className="text-5xl font-black mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Message Sent!
            </motion.h2>
            <motion.p
              className="text-xl text-purple-200 max-w-md mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Thank you for reaching out! We've received your message and will
              get back to you within 24 hours.
            </motion.p>
            <motion.button
              onClick={() => {
                setFormSubmitted(false);
                setFormData({ name: "", email: "", message: "" });
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(34, 197, 94, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 px-8 py-4 font-bold text-white shadow-lg"
            >
              Send Another Message
            </motion.button>
          </motion.div>
        )}
      </motion.main>

      <Footer iconSrc="/images/flower.png" />
    </div>
  );
}
