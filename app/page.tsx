"use client"

import { useState, useEffect } from "react"
import {
  Sun,
  Moon,
  ExternalLink,
  Github,
  Linkedin,
  Briefcase,
  Trophy,
  Rocket,
  GraduationCap,
  Globe,
  Facebook,
} from "lucide-react"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)

    if (newDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const techStack = [
   
    { name: "HTML5", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
    { name: "CSS3", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
    { name: "React", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
    {
      name: "Next.js",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    },
    {name: "Power Apps",
      src: "https://img.icons8.com/?size=100&id=jXuZmZPUKCPS&format=png&color=000000"
    },
    {name: "Power Automate",
      src: "https://img.icons8.com/?size=100&id=kTTt25v6Drpd&format=png&color=000000"
    },
    { name: "PHP", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
    {
      name: "R",
      src: "https://camo.githubusercontent.com/21b60c93f74a3eddd8330231e66f6678c42d6bfb36f3c623d8242d3349f3a61f/68747470733a2f2f7777772e722d70726f6a6563742e6f72672f6c6f676f2f526c6f676f2e737667",
    },
    { name: "Dart", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg" },
    {
      name: "TypeScript",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    
    {
      name: "Flutter",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
    },
     { name: "Laravel", src: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg" },
    { name: "FastAPI", src: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg" },
    { name: "Svelte", src: "https://cdn.worldvectorlogo.com/logos/svelte-1.svg" },
    { name: "Python", src: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
    
    { name: "MySQL", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
    {
      name: "PostgreSQL",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    },
    
    {
      name: "Firebase",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
    },
    
    
    { name: "Git", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
    
  ]

  const experiences = [
    
    {
      title: "Software Developer and Web Developer Intern at Jairosoft Inc.",
      period: "March 2025 - May 2025",
      description:
        " Led the development of web solutions using Angular and Next.js. Worked on frontend and backend using PowerApps and Dataverse. Collaborated with cross-functional teams to deliver scalable and responsive internal applications.",
      technologies: ["Next.js", "Angular", "Microsoft PowerApps", "Dataverse"],
    },
    {
      title: "Hardware and Networking Intern at University of Mindanao Main Campus ICT Department Office",
      period: "Jun 2025 - Jul 2025",
      description:
        "Conducted preventive maintenance and reformatted computer units in computer labs and library. Installed and configured ACCESS POINTS for improved network connectivity. Managed rerouting of UTP cables for optimized network performance. Repaired and maintained printers, including resetting and fixing paper jams. Troubleshoot and resolved BSOD errors and hardware-related issues, including RAM diagnostics.",
      technologies: ["Preventive Maintenance", "Computer Assembly & Troubleshooting", "Access Point Installation & Configuration", "Network Cabling", "Printer Repair & Maintenance"],
    },
  ]

  const certifications = [
    {
      title: "IT Specialist - HTML and CSS",
      issuer: "Certiport",
      date: "May 2024",
      description:
        "Demonstrate that they can structure a webpage using HTML elements and create and apply styles using CSS.",
      badge: "https://images.credly.com/size/340x340/images/e2dc688d-de61-44a5-81af-ee96f117a211/ITS-Badges_HTML-and-CSS_1200px.png",
      link: "https://www.credly.com/badges/690a1700-d62f-457f-80e0-e0f7c76d6aae/linked_in_profile",
    },
    {
      title: "IT Specialist - Cybersecurity",
      issuer: "Certiport",
      date: "March 2025",
      description:
        "Demonstrates knowledge of security principles, best practices for protecting systems and networks, identifying threats, managing vulnerabilities, and implementing risk mitigation strategies.",
      badge: "https://images.credly.com/size/340x340/images/d05c40ff-0e15-4c1d-8c4f-6607e93eda24/ITS-Badges-Cybersecurity.png",
      link: "https://www.credly.com/badges/76438588-9c99-473e-bec7-6dc5fb98619f/linked_in_profile",
    },
    {
      title: "IT Specialist - Network Security",
      issuer: "Certiport",
      date: "July 2024",
      description:
        "Validates skills in securing network infrastructures, configuring firewalls, managing secure network protocols, and implementing measures to protect data transmission and prevent unauthorized access.",
      badge: "https://images.credly.com/size/340x340/images/fa85b446-fcbf-44c0-991f-064d37ae7a6f/ITS-Badges_Network-Security_1200px.png",
      link: "https://www.credly.com/badges/683f2aed-5494-410b-a2f1-13e676510d0f/linked_in_profile",
    },
    {
      title: "Networking Academy - Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "August 2024",
      description:
        "Shows understanding of cybersecurity fundamentals, including threat landscapes, types of attacks, ethical responsibilities, and strategies for safeguarding personal and organizational data.",
      badge: "https://images.credly.com/size/340x340/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
      link: "https://www.credly.com/badges/75231def-d4d0-4daa-b1a3-8e0e0ad9bf7d/linked_in_profile",
    },
  ]

  const projects = [
    {
      title: "ByaheDVO (Route Navigation Mobile Application)",
      description: "A Capstone Project android mobile application with rule-based chatbot for routes navigation within Davao City using Flutter, DialogFlow API and Google Maps API.",
      completedDate: "2025",
      technologies: ["Flutter", "DialogFlow", "Google Maps", "Firebase"],
      link: "https://play.google.com/store/apps/details?id=com.byaheDVO_Navigation.byahe_dvo&hl=en-US&pli=1",
    },
    {
      title: "Realty Property System",
      description: "Collaborated in creating a software solution to address multiple challenges in managing customer and payment data using VB.net with SQLite database.",
      completedDate: "2024",
      technologies: ["VB.net", "SQLite"],
      link: "https://github.com/your-username/realty-property-system",
    },
    {
      title: "Book Management System",
      description: "Built a system for managing book collections using Python and SQLite, enabling efficient tracking of book details, availability, and user interactions.",
      completedDate: "2023",
      technologies: ["Python", "SQLite"],
      link: "https://github.com/your-username/book-management-system",
    },
    {
      title: "Sanina Aparell (E-commerce Platform)",
      description: "Developed an online retail shop for selling t-shirts with an intuitive add-to-cart and checkout process.",
      completedDate: "2023",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/your-username/sanina-aparell",
    },
    {
      title: "Electronic Parts Add-to-Cart System",
      description: "Created a shopping platform where users can browse and add electronic parts to their cart using React.js for front-end.",
      completedDate: "2023",
      technologies: ["C++", "Azure", "SQLite"],
      link: "https://github.com/your-username/electronic-parts-add-to-cart",
    },
  ]

  const education = [
    {
      institution: "University of Mindanao",
      degree: "Bachelor of Science in Information Technology",
      period: "2021 - 2025",
      description:
    "Specialized in software development, database management, and system administration. Gained expertise in web and mobile application development, cybersecurity fundamentals, and cloud-based solutions. Actively engaged in capstone projects and IT research initiatives."
    },
    {
      institution: "Pablo Lorenzo National High School",
      degree: "Senior High School in Science, Technology, Engineering, Mathematics (STEM)",
      period: "2020 - 2021",
      description: "Excelled in mathematics,science and technology.",
    },
    {
      institution: "Holy Cross of Davao College",
      degree: "Senior High School in Science, Technology, Engineering, Mathematics (STEM)",
      period: "2019 - 2020",
      description: "Excelled in mathematics,science and technology.",
    },
    {
      institution: "Pablo Lorenzo National High School",
      degree: "Junior High School",
      period: "2015 - 2019",
      description: "Gained foundational skills in Electrical Installation and Maintenance (EIM) as part of our technical-vocational education track",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Images */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-cyan-50/30 dark:from-gray-900/50 dark:via-gray-800/30 dark:to-gray-900/50"></div>

        {/* Background Image 1 - Top Right */}
        <div className="absolute top-10 right-10 w-64 h-48 opacity-75 dark:opacity-75 rotate-12 transform">
          <img
            src="/images/jairosoft-cert.jpg"
            alt="Professional certification"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Background Image 2 - Middle Left */}
        <div className="absolute top-1/3 left-10 w-56 h-40 opacity-75 dark:opacity-75 -rotate-12 transform">
          <img src="/images/coding-work.jpg" alt="Coding work" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Background Image 3 - Bottom Right */}
        <div className="absolute bottom-32 right-20 w-60 h-44 opacity-75 dark:opacity-75 rotate-6 transform">
          <img
            src="/images/internship-group.jpg"
            alt="Internship group"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Background Image 4 - Bottom Left */}
        <div className="absolute bottom-20 left-16 w-52 h-36 opacity-75 dark:opacity-75 -rotate-6 transform">
          <img
            src="/images/technical-work.jpg"
            alt="Technical work"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="absolute top-10 left-10 w-52 h-36 opacity-75 dark:opacity-75 -rotate-12 transform">
          <img
            src="/images/technical.jpg"
            alt="Technical work"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

         <div className="absolute top-1/3 right-10 w-56 h-40 opacity-75 dark:opacity-75 -rotate-12 transform">
          <img src="/images/deployment.jpg" alt="deployment" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-xl"></div>
        <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-cyan-200/20 dark:bg-cyan-800/20 rounded-full blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between max-w-screen-md mx-auto h-16 px-4">
          <h1 className="dark:text-white text-center text-xl font-semibold">_Kdimz</h1>
          <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm h-9 w-9 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            {darkMode ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
            <span className="sr-only">Toggle theme</span>
          </button>
        </div>

        {/* About Me Section */}
        <div className="card-container">
          <h3 className="text-2xl font-bold flex items-center self-center gap-2">About Me</h3>
          <p className="leading-relaxed dark:text-gray-300">
            Hi, I'm Juliane Kyle B. Dimzon — a graduating student in University of Mindanao and a software engineer that specializes in web development. 
            I also have a strong academic foundation and hands-on experience in software 
            development and system administration. Passionate about leveraging technology to drive innovation, I am 
            seeking a challenging position as a web developer in a technology company. I aim to contribute my skills, 
            provide effective solutions, and bring innovative ideas to support the company's growth and success.
          </p>
          <p className="leading-relaxed dark:text-gray-300">
            One of my recent projects involved developing a comprehensive Time In/Time Out Management System for a company. The system tracks employee attendance, manages time-in and time-out records, and allows employees to request leaves. It also includes role-based access for Admin, Manager, and Staff, ensuring efficient monitoring and approval workflows.
          </p>
         
        </div>

        {/* Technology Stack Section */}
        <div className="card-container">
          <h3 className="text-lg font-semibold mb-3 self-center flex items-center gap-2">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <img
                key={index}
                className="w-12 h-12 hover:scale-110 transition-transform duration-200"
                src={tech.src || "/placeholder.svg?height=48&width=48"}
                alt={`${tech.name} Logo`}
                title={tech.name}
              />
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="card-container">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            Experience
          </h3>
          {experiences.map((exp, index) => (
            <div key={index} className="space-y-2">
              <h4 className="text-lg font-semibold dark:text-white">{exp.title}</h4>
              <p className="text-sm text-gray-500">{exp.period}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 border border-gray-300 rounded-full text-sm dark:border-gray-600 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="card-container">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            Certifications
          </h3>
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-start md:items-center w-full space-y-4 md:space-y-0"
            >
              <div className="flex items-center space-x-4">
                <img
                  className="w-32 h-32 object-contain"
                  src={cert.badge || "/placeholder.svg?height=128&width=128"}
                  alt={`${cert.title} badge`}
                />
                <div className="flex flex-col space-y-2">
                  <h4 className="text-lg font-semibold dark:text-white">{cert.title}</h4>
                  <p className="text-sm font-medium dark:text-gray-300">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">{cert.date}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.description}</p>
                </div>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-sm h-8 rounded-md px-3 text-xs mt-4 md:mt-0 cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                Link <ExternalLink className="h-[1.2rem] w-[1.2rem] ml-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="card-container">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Rocket className="w-5 h-5" />
            Projects
          </h3>
          {projects.map((project, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-semibold dark:text-white">{project.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
              <p className="text-sm text-gray-500">Completed on: {project.completedDate}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 border border-gray-300 rounded-full text-sm dark:border-gray-600 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-sm h-8 rounded-md px-3 text-xs mt-4 cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                Link <ExternalLink className="h-[1.2rem] w-[1.2rem] ml-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="card-container">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            Education
          </h3>
          {education.map((edu, index) => (
            <div key={index} className="space-y-2">
              <h4 className="text-lg font-semibold dark:text-white">{edu.institution}</h4>
              <p className="text-sm font-medium dark:text-gray-300">{edu.degree}</p>
              <p className="text-sm text-gray-500">{edu.period}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Socials Section */}
        <div className="card-container">
          <h3 className="text-xl font-semibold self-center flex items-center gap-2 mb-4">  
            Contact Me
          </h3>
          <div className="flex flex-col gap-3 w-full">
            <a
              href="https://github.com/KeionDz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 shadow h-10 px-4 py-2 w-full cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              <Github className="w-4 h-4 mr-2" />
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/julianekyledimzon/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 shadow h-10 px-4 py-2 w-full cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/KyleBaguioDimzon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 shadow h-10 px-4 py-2 w-full cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              <Facebook className="w-4 h-4 mr-2" />
              Facebook
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-start max-w-screen-md lg:mx-auto md:mx-auto sm:mx-3 h-auto px-4 mb-3 py-4 space-y-3 mx-3">
          <p className="flex items-center text-sm sm:text-base md:text-lg lg:text-xl dark:text-gray-300">
            Powered by
            <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" className="h-6 w-6 ml-1" />
            <img src ="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-6 w-6 ml-1" />
            <span className="ml-1">&nbsp;Kdimz © 2025</span>
            <span className="ml-1">All Rights Reserved.</span>
          </p>
        </div>
      </div>
    </div>
  )
}
