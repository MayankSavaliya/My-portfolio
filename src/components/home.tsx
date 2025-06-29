"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { TypingAnimation } from "@/components/typing-animation";
import { SkillBar } from "@/components/skill-bar";
import { ProjectCard } from "@/components/project-card";
import { AchievementCard } from "@/components/achievement-card";
import { ContactForm } from "@/components/contact-form";
import { ClientOnly } from "@/components/client-only";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { downloadResume } from "@/lib/utils";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  Code,
  Trophy,
  GraduationCap,
  ExternalLink,
  Route,
  Users,
  Image,
  MessageCircle,
  Bitcoin,
  PieChart,
  Award,
  Presentation,
  Medal,
  Star,
} from "lucide-react";
import {
  SiCodeforces,
  SiLeetcode,
  SiCodechef,
  SiMeta,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPython,
  SiFlask,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiAmazon,
  SiHeroku,
  SiPostman,
  SiNetlify,
  SiVercel,
} from "react-icons/si";


const projects = [
  {
    title: "SkillHive",
    description: "A peer-led micro-course platform where students can create and enroll in courses, featuring secure authentication, payment integration, and course management.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Stripe"],
    githubUrl: "https://github.com/mayanksavaliya/SkillHive",
    liveUrl: "https://skill-hive-frontend.vercel.app/",
    gradientFrom: "from-blue-600",
    gradientTo: "to-purple-600",
    icon: <GraduationCap className="h-8 w-8" />,
    index: 0,
  },
  {
    title: "CodePix",
    description: "Convert your code into beautiful, shareable images with customizable themes, syntax highlighting, and social media optimization.",
    technologies: ["React", "Node.js", "Canvas API", "Tailwind CSS"],
    githubUrl: "https://github.com/mayanksavaliya/CodePix",
    liveUrl: "https://codepix-frontend.vercel.app/",
    gradientFrom: "from-green-600",
    gradientTo: "to-blue-600",
    icon: <Image className="h-8 w-8" />,
    index: 1,
  },
  {
    title: "SwiftRoute",
    description: "An intelligent route optimization system that finds the most efficient paths using advanced algorithms and real-time data processing.",
    technologies: ["Python", "Flask", "JavaScript", "Leaflet.js"],
    githubUrl: "https://github.com/mayanksavaliya/SwiftRoute",
    gradientFrom: "from-purple-600",
    gradientTo: "to-pink-600",
    icon: <Route className="h-8 w-8" />,
    index: 2,
  },
  {
    title: "Expense Tracker",
    description: "A comprehensive personal finance management tool with categorization, budget tracking, and detailed analytics for better financial insights.",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    githubUrl: "https://github.com/mayanksavaliya/expense-tracker",
    gradientFrom: "from-orange-600",
    gradientTo: "to-red-600",
    icon: <PieChart className="h-8 w-8" />,
    index: 3,
  },
];

const achievements = [
  {
    title: "ICPC Regionals Qualifier",
    subtitle: "AIR 22 (Kanpur) • AIR 29 (Chennai)",
    description: "Qualified for ICPC 2023-24 Regionals with team 'GreedyTurtles'. Achieved AIR 22 in Kanpur Regional and AIR 29 in Chennai Regional, demonstrating exceptional algorithmic problem-solving skills.",
    icon: <Trophy className="h-8 w-8" />,
    iconColor: "text-yellow-500",
    index: 0,
  },
  {
    title: "Codeforces Candidate Master",
    subtitle: "Max Rating: 1917",
    description: "Achieved Candidate Master rating on Codeforces with a maximum rating of 1937. Consistently ranked in top global positions including Global Rank 59 in Round 901 and Global Rank 279 in Round 931.",
    icon: <SiCodeforces className="h-8 w-8" />,
    iconColor: "text-blue-500",
    index: 1,
  },
  {
    title: "LeetCode Guardian",
    subtitle: "Top 0.20% Worldwide • Max Rating: 2511",
    description: "Ranked in the top 0.20% of LeetCode's global user base, placing among the top 1500 coders worldwide plus exceptional contest performances including Global Rank 57 in Weekly Contest 412 and Global Rank 63 in Weekly Contest 413.",
    icon: <SiLeetcode className="h-8 w-8" />,
    iconColor: "text-orange-500",
    index: 2,
  },
  {
    title: "CodeChef 5-Star Coder",
    subtitle: "Max Rating: 2138",
    description: "Achieved 5-Star rating on CodeChef with maximum rating of 2138. Secured Global Rank 8 in Starter 125 and Global Rank 25 in Starter 126, showcasing consistent top-tier performance.",
    icon: <SiCodechef className="h-8 w-8" />,
    iconColor: "text-green-500",
    index: 3,
  },
  {
    title: "Meta HackerCup 2024",
    subtitle: "Global Rank 1329",
    description: "Successfully qualified for Meta HackerCup Round 2, securing global rank 1329 out of 22,000+ participants worldwide. Demonstrated exceptional problem-solving skills in one of the most prestigious programming competitions.  ",
    icon: <SiMeta className="h-8 w-8" />,
    iconColor: "text-blue-600",
    index: 4,
  },
  {
    title: "MINeD Hackathon Winner",
    subtitle: "Track Winner 2025",
    description: "Won the MINeD Hackathon 2025 as Track Winner among 50+ competing teams. Showcased innovative problem-solving and teamwork skills in a competitive hackathon environment.",
    icon: <Award className="h-8 w-8" />,
    iconColor: "text-purple-500",
    index: 5,
  },
];

const technicalSkills = {
  languages: ["C/C++", "Python", "Javascript", "HTML+CSS", "Java"],
  librariesFrameworks: ["C++ STL", "Python Libraries", "ReactJs"],
  webDevTools: ["Express.js", "Node.js", "Git", "GitHub", "React.js", "Redux"],
  cloudDatabases: ["AWS", "MongoDb", "Firebase", "Relational Database(mySql)"],
  relevantCoursework: [
    "Data Structures & Algorithms",
    "Operating Systems", 
    "Object Oriented Programming",
    "Database Management System",
    "Machine Learning",
    "Computer Networks",
    "Cloud Computing",
    "Data Analysis and Visualization"
  ]
};

const typingTexts = [
  "Computer Science Student",
  "Competitive Programmer", 
  "Full-Stack Developer",
  "Problem Solver",
  "Tech Enthusiast"
];

const experiences = [
  {
    title: "Backend Developer Intern",
    company: "Agevole Technologies Pvt Ltd",
    duration: "May - June 2025",
    location: "Surat , Gujarat",
    responsibilities: [
      "Developed backend modules for SkillHive, a production learning platform with authentication, payments, and media management features.",
      "Collaborated with a team of 15+ developers and interns on API design, database modeling, and feature integration.",
      "Delivered 20+ secure REST APIs and contributed to testing, debugging, and deployment workflows."
    ],
  },
  {
    title: "Mentor",
    company: "TLE Eliminators",
    duration: "Jan - Feb 2025",
    location: "Remote",
    responsibilities: [
      "Resolved 50+ algorithmic doubts for students on various coding platforms, ensuring clear understanding of problem-solving approaches",
      "Provided structured debugging guidance and optimization techniques, improving student's code efficiency",
      "Mentored students in systematic problem-solving, advancing their skills from implementation to optimization of complex algorithms"
    ],
  },
  {
    title: "Club Vice-President",
    company: "CodeAdda Programming Club",
    duration: "Nov 2024 - Present",
    location: "Nirma University",
    responsibilities: [
      "Organized 10+ coding contests, engaging 500+ students and improving problem-solving skills at Nirma University",
      "Teaching various algorithms for competitive programming to over 100 students at Nirma University"
    ],
  },

];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden hero-grid hero-spotlight">
        <div className="floating-elements"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-violet-900/20"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-purple-500/10 rotate-45 animate-bounce"></div>
        <div className="absolute bottom-32 left-40 w-12 h-12 bg-green-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-pink-500/10 rotate-12 animate-spin-slow"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, rotateX: -90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hero-card transform-3d"
            >
              <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text perspective-text">
                Mayank Savaliya
              </h1>
              <div className="text-2xl md:text-3xl text-muted-foreground mb-8 min-h-[3rem] flex items-center justify-center">
                <TypingAnimation 
                  texts={typingTexts}
                  className="typing-gradient"
                />
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed glass-text"
            >
              Passionate about solving complex problems through code, building innovative web applications, 
              and competing in algorithmic programming challenges.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            >
              <Button 
                size="lg" 
                className="magnetic-button transform-3d hover-glow"
                onClick={downloadResume}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <div className="flex space-x-4">
                <Button asChild variant="outline" size="icon" className="glass-effect magnetic-element">
                  <a href="https://github.com/mayanksavaliya" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="glass-effect magnetic-element">
                  <a href="https://www.linkedin.com/in/mayanksavaliya/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="glass-effect magnetic-element">
                  <a href="https://codeforces.com/profile/MayankSavaliya" target="_blank" rel="noopener noreferrer">
                    <SiCodeforces className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="glass-effect magnetic-element">
                  <a href="https://www.codechef.com/users/mayanks1275" target="_blank" rel="noopener noreferrer">
                    <SiCodechef className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a passionate Computer Science student at Nirma University, deeply immersed in 
                competitive programming and algorithmic problem-solving.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With expertise in algorithms, data structures, and systematic problem-solving approaches, 
                I tackle challenges across competitive programming, full-stack development, and machine learning. 
                I believe in writing clean, efficient code that not only solves problems but does so optimally.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <Badge variant="secondary">Competitive Programming</Badge>
                <Badge variant="secondary">Algorithmic Problem Solving</Badge>
                <Badge variant="secondary">Data Structures</Badge>
                <Badge variant="secondary">Full-Stack Development</Badge>
                <Badge variant="secondary">Machine Learning</Badge>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 gradient-text">Education</h3>
                  <div className="grid gap-4">
                    {/* Bachelor's Degree */}
                    <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-primary">Bachelor of Technology</h4>
                        <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          8.71/10
                        </Badge>
                      </div>
                      <p className="text-foreground font-medium">Computer Science & Engineering</p>
                      <p className="text-muted-foreground">Nirma University • 2022 - 2026</p>
                    </div>

                    {/* Higher Secondary */}
                    <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border border-green-200 dark:border-green-800">
                      <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">Higher Secondary Education</h4>
                      <p className="text-foreground">Ashadeep IIT • 2020 - 2022</p>
                      <div className="mt-2 flex gap-2">
                        <Badge variant="outline" className="text-xs">Gujcet: 99.66%</Badge>
                        <Badge variant="outline" className="text-xs">Board: 99.73%</Badge>
                      </div>
                    </div>

                    {/* Secondary */}
                    <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-200 dark:border-purple-800">
                      <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">Secondary Education</h4>
                      <p className="text-foreground">L.P.Savani HighSchool • 2018 - 2020</p>
                      <div className="mt-2">
                        <Badge variant="outline" className="text-xs">Board: 99.95%</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative overflow-hidden projects-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80"></div>
        
        {/* Floating code elements */}
        <div className="absolute top-20 left-10 text-6xl text-blue-500/10 animate-float">
          <Code />
        </div>
        <div className="absolute bottom-20 right-10 text-5xl text-green-500/10 animate-bounce">
          <ExternalLink />
        </div>
        <div className="absolute top-40 right-20 text-4xl text-purple-500/10 animate-pulse">
          <Github />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-blue-500 mr-4"></div>
              <Code className="text-4xl text-blue-500 animate-pulse" />
              <div className="w-12 h-1 bg-gradient-to-l from-transparent to-purple-500 ml-4"></div>
            </div>
            <h2 className="text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg">Innovative solutions built with modern technologies</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
          
          {/* Decorative Tech Stack Icons */}
          <motion.div 
            className="flex justify-center space-x-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.2, rotateY: 180 }} className="text-4xl text-blue-500"><SiReact /></motion.div>
            <motion.div whileHover={{ scale: 1.2, rotateY: 180 }} className="text-4xl text-green-500"><SiNodedotjs /></motion.div>
            <motion.div whileHover={{ scale: 1.2, rotateY: 180 }} className="text-4xl text-yellow-500"><SiPython /></motion.div>
            <motion.div whileHover={{ scale: 1.2, rotateY: 180 }} className="text-4xl text-blue-600"><SiMongodb /></motion.div>
            <motion.div whileHover={{ scale: 1.2, rotateY: 180 }} className="text-4xl text-teal-500"><SiTailwindcss /></motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 relative overflow-hidden achievements-mesh">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>
        
        {/* 3D Trophy Elements */}
        <div className="absolute top-10 left-10 text-6xl text-yellow-500/20 animate-float">
          <Trophy />
        </div>
        <div className="absolute top-20 right-10 text-5xl text-blue-500/20 animate-bounce">
          <Medal />
        </div>
        <div className="absolute bottom-20 left-20 text-4xl text-green-500/20 rotate-animation">
          <Award />
        </div>
        <div className="absolute bottom-10 right-10 text-5xl text-purple-500/20 animate-pulse">
          <Star />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-yellow-500 mr-4"></div>
              <Trophy className="text-4xl text-yellow-500 animate-pulse" />
              <div className="w-12 h-1 bg-gradient-to-l from-transparent to-orange-500 ml-4"></div>
            </div>
            <h2 className="text-5xl font-bold gradient-text mb-4">Achievements</h2>
            <p className="text-muted-foreground text-lg">Recognition in competitive programming and development</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <AchievementCard key={achievement.title} {...achievement} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative overflow-hidden skills-wave">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background/90"></div>
        
        {/* Floating tech icons */}
        <div className="absolute top-20 left-10 text-5xl text-blue-500/20 animate-float">
          <SiReact />
        </div>
        <div className="absolute top-40 right-20 text-4xl text-green-500/20 animate-bounce">
          <SiNodedotjs />
        </div>
        <div className="absolute bottom-32 left-20 text-6xl text-yellow-500/20 hologram-effect">
          <SiJavascript />
        </div>
        <div className="absolute bottom-20 right-10 text-5xl text-blue-600/20 rotate-animation">
          <SiPython />
        </div>
        <div className="absolute top-60 right-40 text-3xl text-teal-500/20 animate-pulse">
          <SiTailwindcss />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-blue-500 mr-4"></div>
              <div className="relative">
                <Code className="text-4xl text-blue-500 animate-pulse" />
                <ClientOnly>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </ClientOnly>
              </div>
              <div className="w-12 h-1 bg-gradient-to-l from-transparent to-purple-500 ml-4"></div>
            </div>
            <h2 className="text-5xl font-bold gradient-text mb-4">Technical Skills</h2>
            <p className="text-muted-foreground text-lg">Technologies and expertise from academics and projects</p>
          </motion.div>
          
          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl transform-3d card-3d"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3 text-blue-500">
                  <Code />
                </div>
                <h3 className="text-xl font-bold text-primary">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.languages.map((skill, index) => (
                  <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:scale-105 transition-transform">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Libraries and Frameworks */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl transform-3d card-3d"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3 text-green-500">
                  <SiReact />
                </div>
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400">Libraries and Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.librariesFrameworks.map((skill, index) => (
                  <Badge key={skill} variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 hover:scale-105 transition-transform">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Web Dev Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl transform-3d card-3d"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3 text-purple-500">
                  <SiGit />
                </div>
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">Web Dev Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.webDevTools.map((skill, index) => (
                  <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 hover:scale-105 transition-transform">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Cloud/Databases */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl transform-3d card-3d"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3 text-orange-500">
                  <SiAmazon />
                </div>
                <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400">Cloud/Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.cloudDatabases.map((skill, index) => (
                  <Badge key={skill} variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 hover:scale-105 transition-transform">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Relevant Coursework - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-xl transform-3d card-3d mt-8"
          >
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-3 text-indigo-500">
                <GraduationCap />
              </div>
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Relevant Coursework</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.relevantCoursework.map((course, index) => (
                <Badge key={course} variant="secondary" className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 hover:scale-105 transition-transform">
                  {course}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Experience
          </motion.h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-primary font-semibold">{experience.company}</p>
                      </div>
                      <div className="text-muted-foreground">
                        <p>{experience.duration}</p>
                        <p className="text-sm">{experience.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      {experience.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start">
                          <Award className="text-green-500 mt-1 mr-3 flex-shrink-0 h-4 w-4" />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative overflow-hidden contact-aurora">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80"></div>
        
        {/* 3D Communication Elements */}
        <div className="absolute top-10 left-10 text-5xl text-blue-500/20 animate-float">
          <Mail />
        </div>
        <div className="absolute top-20 right-10 text-4xl text-green-500/20 animate-bounce">
          <Phone />
        </div>
        <div className="absolute bottom-20 left-20 text-6xl text-purple-500/20 hologram-effect">
          <MessageCircle />
        </div>
        <div className="absolute bottom-10 right-10 text-5xl text-red-500/20 animate-pulse">
          <MapPin />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-blue-500 mr-4"></div>
              <div className="relative">
                <Mail className="text-4xl text-blue-500 animate-pulse" />
                <ClientOnly>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </ClientOnly>
              </div>
              <div className="w-12 h-1 bg-gradient-to-l from-transparent to-purple-500 ml-4"></div>
            </div>
            <h2 className="text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
            <p className="text-muted-foreground text-lg">Let&apos;s create something amazing together</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect!</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  I&apos;m always interested in new opportunities, collaborations, and discussions about technology, competitive programming, and software development.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:mayanksavaliya012@gmail.com" className="text-primary hover:underline">
                      mayanksavaliya012@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+919081673681" className="text-primary hover:underline">
                      +91 9081673681
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Ahmedabad, Gujarat, India</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="font-bold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <Button asChild variant="outline" size="icon">
                    <a href="https://github.com/mayanksavaliya" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="icon">
                    <a href="https://www.linkedin.com/in/mayanksavaliya/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="icon">
                    <a href="https://www.codeforces.com/profile/MayankSavaliya" target="_blank" rel="noopener noreferrer">
                      <SiCodeforces className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="icon">
                    <a href="https://www.codechef.com/users/mayanksavaliya" target="_blank" rel="noopener noreferrer">
                      <SiCodechef className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="icon">
                    <a href="https://leetcode.com/MayankSavaliya/" target="_blank" rel="noopener noreferrer">
                      <SiLeetcode className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card border-t">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">© 2025 Mayank Savaliya. All rights reserved.</p>
          <p className="text-muted-foreground">Built with ❤️ using Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}