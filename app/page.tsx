"use client"

import { Mail, Phone, Github, Linkedin, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function PortfolioHome() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-card/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            AKG
          </h1>
          <div className="flex gap-8 items-center">
            <Link href="#about" className="hidden md:block text-sm hover:text-accent transition">
              About
            </Link>
            <Link href="#experience" className="hidden md:block text-sm hover:text-accent transition">
              Experience
            </Link>
            <Link href="#projects" className="hidden md:block text-sm hover:text-accent transition">
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-8 pt-20 md:pt-0 relative overflow-hidden">
        {/* Background gradient blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Aman Kumar Gupta</h2>
            <p className="text-xl md:text-2xl text-muted-foreground">Full Stack Developer & Software Engineer</p>
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building innovative digital solutions with modern technologies. Experienced in production engineering,
            diagnostics, and full-stack development with expertise in Java, Python, C++, and cloud platforms.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center pt-6">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-card hover:bg-card/80 text-foreground border border-border rounded-lg transition"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center gap-6 pt-8">
            <a href="mailto:amankumargupta326@gmail.com" className="hover:text-accent transition" title="Email">
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/Amankg1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
              title="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/amankug1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a href="tel:+917561917376" className="hover:text-accent transition" title="Phone">
              <Phone size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-accent" size={32} />
        </div>
      </section>

      <section id="about" className="py-20 md:py-32 px-6 md:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate software engineer with a strong foundation in both production engineering and
                full-stack development. My journey spans from quality assurance and technical diagnostics to building
                scalable web applications.
              </p>
              <p>
                With expertise in Java, Python, C++, and cloud platforms, I focus on creating efficient, maintainable
                solutions that solve real-world problems. I'm driven by continuous learning and staying updated with the
                latest technologies.
              </p>
              <p>
                Currently pursuing my B.Tech in Information Technology, while applying my knowledge in practical
                projects ranging from complaint management systems to IoT-based parking solutions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-card rounded-lg border border-border hover:border-accent transition">
              <h3 className="font-bold text-accent text-lg mb-2">Languages</h3>
              <p className="text-sm text-muted-foreground">C, C++, Java, Python, SQL</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border hover:border-accent transition">
              <h3 className="font-bold text-accent text-lg mb-2">Frontend</h3>
              <p className="text-sm text-muted-foreground">HTML, CSS, React, Next.js</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border hover:border-accent transition">
              <h3 className="font-bold text-accent text-lg mb-2">Backend</h3>
              <p className="text-sm text-muted-foreground">Java, Python, MySQL, Azure</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border hover:border-accent transition">
              <h3 className="font-bold text-accent text-lg mb-2">Tools</h3>
              <p className="text-sm text-muted-foreground">Git, VS Code, Azure Cloud</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Experience</h2>

          <div className="space-y-8">
            {/* Subeam Experience */}
            <div className="group relative">
              <div className="absolute -left-4 w-8 h-8 rounded-full bg-primary border-4 border-background mt-2"></div>
              <div className="ml-8 p-6 bg-card rounded-lg border border-border hover:border-accent transition">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">Subeam Lightweighting Solutions Pvt. Ltd.</h3>
                  <span className="text-accent text-sm">Aug 2023 - Apr 2024</span>
                </div>
                <p className="text-primary mb-3">Production Engineer / Quality Assurance</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Oversaw production processes, quality inspections, and dispatch control</li>
                  <li>• Implemented inspection-based tracking and improved output accuracy</li>
                  <li>• Conducted root cause analysis in mechanical faults and applied IOC measures</li>
                </ul>
              </div>
            </div>

            {/* Maruti Suzuki Experience */}
            <div className="group relative">
              <div className="absolute -left-4 w-8 h-8 rounded-full bg-primary border-4 border-background mt-2"></div>
              <div className="ml-8 p-6 bg-card rounded-lg border border-border hover:border-accent transition">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">Maruti Suzuki, Kolkata</h3>
                  <span className="text-accent text-sm">Aug 2022 - Sep 2022</span>
                </div>
                <p className="text-primary mb-3">Technical Diagnostics Intern</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Leveraged OBD software to interface with vehicular embedded systems</li>
                  <li>• Executed diagnostic procedures achieving 15% reduction in service time</li>
                  <li>• Authored detailed service logs for 50+ vehicles with structured repository</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 md:py-32 px-6 md:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Featured Projects</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="group relative bg-gradient-to-br from-card to-card/50 rounded-lg overflow-hidden border border-border hover:border-accent transition h-80">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 relative z-10">
                <h3 className="text-xl font-bold mb-2">Complaint Management System</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Web portal for complaint tracking and resolution with admin dashboard
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 rounded text-xs bg-primary/20 text-accent">Java</span>
                  <span className="px-2 py-1 rounded text-xs bg-primary/20 text-accent">MySQL</span>
                  <span className="px-2 py-1 rounded text-xs bg-primary/20 text-accent">Azure</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative bg-gradient-to-br from-card to-card/50 rounded-lg overflow-hidden border border-border hover:border-accent transition h-80">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 relative z-10">
                <h3 className="text-xl font-bold mb-2">Employee Management System</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Desktop application for managing employee records and payroll
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 rounded text-xs bg-primary/20 text-accent">Java</span>
                  <span className="px-2 py-1 rounded text-xs bg-primary/20 text-accent">MySQL</span>
                  <span className="px-2 py-1 rounded text-xs bg-primary/20 text-accent">Desktop</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative bg-gradient-to-br from-card to-card/50 rounded-lg overflow-hidden border border-border hover:border-accent transition h-80">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 relative z-10">
                <h3 className="text-xl font-bold mb-2">IoT Parking System</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Microcontroller-based sensor system for smart parking slot allocation
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 rounded text-xs bg-primary/20 text-accent">Embedded C</span>
                  <span className="px-2 py-1 rounded text-xs bg-primary/20 text-accent">IoT</span>
                  <span className="px-2 py-1 rounded text-xs bg-primary/20 text-accent">Sensors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Skills & Certifications</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-accent">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Languages</p>
                  <p className="text-muted-foreground">C, C++, Java, Python, MySQL</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Web Technologies</p>
                  <p className="text-muted-foreground">HTML, CSS, React, Next.js, REST APIs</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Databases & Cloud</p>
                  <p className="text-muted-foreground">MySQL, Azure Cloud, Microsoft Learn</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Tools</p>
                  <p className="text-muted-foreground">Git, VS Code, Docker basics, Azure DevOps</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-accent">Certifications</h3>
              <div className="space-y-3">
                <div className="p-4 bg-card rounded-lg border border-border hover:border-accent transition">
                  <p className="font-semibold">Microsoft Certified</p>
                  <p className="text-muted-foreground text-sm">Azure AI Fundamentals</p>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border hover:border-accent transition">
                  <p className="font-semibold">Microsoft Learn</p>
                  <p className="text-muted-foreground text-sm">Multiple AI training program badges</p>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border hover:border-accent transition">
                  <p className="font-semibold">Hackathons</p>
                  <p className="text-muted-foreground text-sm">HackIndia Participant, APLL Smart Commerce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-32 px-6 md:px-8 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Let's Connect</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to interesting opportunities and collaborations. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 my-12">
            <a
              href="mailto:amankumargupta326@gmail.com"
              className="p-6 bg-card rounded-lg border border-border hover:border-accent transition group cursor-pointer"
            >
              <Mail className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition" />
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-muted-foreground text-sm break-all">amankumargupta326@gmail.com</p>
            </a>

            <a
              href="https://linkedin.com/in/amankug1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-card rounded-lg border border-border hover:border-accent transition group cursor-pointer"
            >
              <Linkedin className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition" />
              <h3 className="font-semibold mb-1">LinkedIn</h3>
              <p className="text-muted-foreground text-sm">linkedin.com/in/amankug1</p>
            </a>

            <a
              href="https://github.com/Amankg1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-card rounded-lg border border-border hover:border-accent transition group cursor-pointer"
            >
              <Github className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition" />
              <h3 className="font-semibold mb-1">GitHub</h3>
              <p className="text-muted-foreground text-sm">github.com/Amankg1</p>
            </a>
          </div>

          <a
            href="mailto:amankumargupta326@gmail.com"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition transform hover:scale-105"
          >
            Send Me an Email
          </a>
        </div>
      </section>

      <footer className="py-8 px-6 md:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-muted-foreground text-sm">
          <p>© 2025 Aman Kumar Gupta. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/Amankg1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/amankug1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
