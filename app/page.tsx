"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronDown, Mail, Phone, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [currentSkill, setCurrentSkill] = useState(0)

  const skills = [
    "AI/ML",
    "Full-Stack Development",
    "Distributed Systems",
    "Data Engineering",
    "Problem Solving",
    "Hackathons",
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setIsScrolled(window.scrollY > 50)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [skills.length])

  const projects = [
    {
      title: "Agentic AI Finance Assistant",
      description: "Google Hackathon finalist - Intelligent financial advisory system using advanced AI agents",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      status: "🏆 Finalist",
    },
    {
      title: "Drug Trafficking Detection System",
      description: "SIH 2024 - Advanced detection system using computer vision and machine learning",
      tech: ["OpenCV", "PyTorch", "Flask", "MongoDB"],
      status: "🥇 Winner",
    },
    {
      title: "Fashion Item Classifier",
      description: "CNN-based image classification system for fashion e-commerce platforms",
      tech: ["TensorFlow", "Keras", "Python", "Docker"],
      status: "✨ Featured",
    },
    {
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio with Apple-inspired design and smooth animations",
      tech: ["React", "Next.js", "Tailwind", "Framer Motion"],
      status: "🚀 Live",
    },
    {
      title: "Open Source Contributions",
      description: "Contributing to various open source projects in AI/ML and web development",
      tech: ["Various", "GitHub", "Community"],
      status: "🌟 Active",
    },
  ]

  const companies = ["Google", "Smart India Hackathon", "Coincent.ai"]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-xl font-semibold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent cursor-pointer relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("home")}
          >
            <motion.span
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% 200%" }}
            >
              MA
            </motion.span>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-pink-500/20 rounded-lg blur-lg"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { name: "Home", id: "home", external: false },
              { name: "About", id: "about", external: false },
              { name: "Work", id: "work", external: false },
              { name: "Contact", id: "contact", external: false },
              {
                name: "Resume",
                id: "resume",
                external: true,
                url: "https://drive.google.com/file/d/1nztoHe1wDLZSe94hCmbMAT3L9fAMIlph/view?usp=sharing",
              },
            ].map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => {
                  if (item.external && item.url) {
                    window.open(item.url, "_blank", "noopener,noreferrer")
                  } else {
                    scrollToSection(item.id)
                  }
                }}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium relative"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
              >
                <span className="relative z-10 flex items-center gap-1">
                  {item.name}
                  {item.external && <ExternalLink className="w-3 h-3" />}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-pink-500/20 rounded-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile buttons */}
          <div className="flex md:hidden gap-4">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white h-9 px-4"
            >
              Contact
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1nztoHe1wDLZSe94hCmbMAT3L9fAMIlph/view?usp=sharing",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="h-9 px-4 flex items-center gap-1"
            >
              Resume <ExternalLink className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden">
        {/* Animated Background with parallax */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 blur-3xl"
          style={{
            y: scrollY * 0.5,
          }}
        />
        
        {/* Background grid pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            y: scrollY * 0.3,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent transform skew-y-12"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-pink-500/20 to-transparent transform -skew-y-12"></div>
        </motion.div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              y: scrollY * (0.1 + Math.random() * 0.2),
            }}
          />
        ))}

        {/* Interactive Cursor Effect - Hidden but functional */}
        <motion.div
          className="fixed w-4 h-4 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference opacity-0"
          animate={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            scale: isHovering ? 2 : 1,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />

        <motion.div
          className="text-center z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            y: scrollY * 0.1,
          }}
        >
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          >
            <motion.div 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gradient-to-r from-orange-400 to-pink-500 p-1 bg-gradient-to-r from-orange-400 to-pink-500"
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                boxShadow: "0 0 40px rgba(249, 115, 22, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                <Image
                  src="/avatar.png"
                  alt="Moinuddin Ahamed"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
              
              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-orange-400"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% 200%" }}
            >
              I'm Moinuddin Ahamed
            </motion.span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span>An aspiring Software Developer who builds intelligent and scalable systems, combining creativity, logic, and a user-focused approach to solve real-world problems.</span>
          </motion.div>

          {/* Animated Skills Showcase */}
          <motion.div
            className="mb-12 h-16 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-lg text-gray-400 mr-4">Specializing in:</span>
            <motion.div
              key={currentSkill}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent font-bold text-xl"
            >
              {skills[currentSkill]}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 relative overflow-hidden group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Hire Me</span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                onClick={() => scrollToSection("about")}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all duration-300 bg-transparent relative overflow-hidden group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <motion.span
                  className="absolute inset-0 bg-white/5"
                  initial={{ scale: 0, borderRadius: "50%" }}
                  whileHover={{ scale: 1, borderRadius: "0%" }}
                  transition={{ duration: 0.4 }}
                />
                <span className="relative z-10">My Story</span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Scroller */}
      <section className="py-16 overflow-hidden">
        <div className="relative">
          <motion.div
            className="flex space-x-8 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <span key={index} className="text-2xl md:text-3xl font-light text-white/60 flex items-center">
                {skill} <span className="mx-8 text-orange-400">•</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div 
                className="w-64 h-64 mx-auto bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center text-6xl relative overflow-hidden group cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 5,
                  boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
              >
                {/* Rotating border */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-dashed border-white/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Floating elements */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/40 rounded-full"
                    animate={{
                      x: [0, Math.cos(i * 60 * Math.PI / 180) * 30],
                      y: [0, Math.sin(i * 60 * Math.PI / 180) * 30],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                    style={{
                      left: "50%",
                      top: "50%",
                    }}
                  />
                ))}
                
                {/* Main avatar image with bounce */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10 w-full h-full"
                >
                  <Image
                    src="/avatar2.png"
                    alt="Moinuddin Ahamed - About"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 2
                  }}
                />
              </motion.div>
              
              {/* Orbiting particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-orange-400 rounded-full opacity-60"
                  animate={{
                    x: [0, Math.cos(i * 120 * Math.PI / 180) * 150],
                    y: [0, Math.sin(i * 120 * Math.PI / 180) * 150],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 2.67,
                  }}
                  style={{
                    left: "50%",
                    top: "50%",
                    transformOrigin: "0 0",
                  }}
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Hey there! I'm Moinuddin, a passionate developer with a love for building intelligent and scalable
                systems. With expertise in AI, distributed systems, and user-focused software development, I aim to
                create impactful digital solutions. Let's collaborate and turn ideas into reality!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { number: "3+", label: "Years of Coding &\nHackathon Experience" },
                  { number: "5+", label: "Hackathons &\nCompetitions" },
                  { number: "10+", label: "Projects\nBuilt" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 whitespace-pre-line">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.03,
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
                className="perspective-1000"
              >
                <motion.div
                  className="relative group"
                  onHoverStart={() => setIsHovering(true)}
                  onHoverEnd={() => setIsHovering(false)}
                >
                  {/* Glowing background effect */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-orange-400/20 via-pink-500/20 to-purple-500/20 rounded-xl blur-lg"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <Card className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border-white/10 hover:border-orange-400/30 transition-all duration-500 h-full overflow-hidden">
                    {/* Animated border */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Floating particles inside card */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-orange-400/60 rounded-full"
                        animate={{
                          x: [0, Math.random() * 50 - 25],
                          y: [0, Math.random() * 50 - 25],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: Math.random() * 3 + 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                      />
                    ))}
                    
                    <CardContent className="p-6 relative z-10">
                      <motion.div 
                        className="flex justify-between items-start mb-4"
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <motion.h3 
                          className="text-xl font-semibold text-white group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          {project.title}
                        </motion.h3>
                        <motion.span 
                          className="text-xs bg-gradient-to-r from-orange-400 to-pink-500 px-2 py-1 rounded-full"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {project.status}
                        </motion.span>
                      </motion.div>
                      
                      <motion.p 
                        className="text-gray-400 mb-4 text-sm leading-relaxed"
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                      >
                        {project.description}
                      </motion.p>
                      
                      <motion.div 
                        className="flex flex-wrap gap-2 mb-4"
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        {project.tech.map((tech, techIndex) => (
                          <motion.span 
                            key={techIndex} 
                            className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded-md text-gray-300 cursor-default"
                            whileHover={{ scale: 1.1, y: -2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                      
                      <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.6 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-orange-400 hover:text-orange-300 hover:bg-orange-400/10 p-0 group-hover:translate-x-1 transition-transform duration-300"
                          >
                            View Project 
                            <motion.div
                              whileHover={{ x: 3 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <ExternalLink className="w-3 h-3 ml-1" />
                            </motion.div>
                          </Button>
                        </motion.div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Background animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-pink-500/5 to-purple-500/5"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ backgroundSize: "400% 400%" }}
        />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Companies & Competitions
            </motion.span>
            <br />
            <span className="text-white">I've Worked With</span>
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full border border-white/20 text-white font-medium relative overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-pink-500/30 rounded-full blur-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <span className="relative z-10">{company}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href="mailto:moinuddinahamed@outlook.com"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>moinuddinahamed@outlook.com</span>
            </a>
            <a
              href="tel:+917893134552"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 78931 34552</span>
            </a>
            <a
              href="https://linkedin.com/in/moinuddinahamed"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </motion.div>

          <motion.p
            className="text-gray-500 text-sm mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            © 2025 Moinuddin Ahamed. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  )
}
