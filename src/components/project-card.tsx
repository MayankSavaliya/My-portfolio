"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  gradientFrom: string;
  gradientTo: string;
  icon: React.ReactNode;
  index: number;
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  gradientFrom,
  gradientTo,
  icon,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
      viewport={{ once: true }}
      whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
      className="group perspective-1000"
    >
      <Card className="overflow-hidden glass-card hover:animate-glow transition-all duration-500 transform-3d card-3d">
        <div className={`h-48 bg-gradient-to-br ${gradientFrom} ${gradientTo} relative overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <motion.div
              whileHover={{ scale: 1.2, rotateZ: 10 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="text-6xl opacity-90 drop-shadow-lg"
            >
              {icon}
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <div className="absolute top-4 right-4">
            <div className="w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
          </div>
        </div>
        <CardContent className="p-6 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <h3 className="text-xl font-bold mb-2 gradient-text">{title}</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, techIndex) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="text-xs bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 hover:border-blue-500/40 transition-colors">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
          <div className="flex space-x-3">
            {githubUrl && (
              <Button asChild variant="outline" size="sm" className="flex-1 glass-effect border-blue-500/30 hover:border-blue-500/60">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
            {liveUrl && (
              <Button asChild size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}