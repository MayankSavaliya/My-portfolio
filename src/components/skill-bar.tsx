"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  skill: string;
  percentage: number;
  color?: string;
  delay?: number;
}

export function SkillBar({ skill, percentage, color = "bg-blue-600", delay = 0 }: SkillBarProps) {
  return (
    <motion.div 
      className="space-y-2 perspective-1000"
      initial={{ opacity: 0, rotateX: 30 }}
      whileInView={{ opacity: 1, rotateX: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, rotateX: 2 }}
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium gradient-text">{skill}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-3 glass-card transform-3d">
        <motion.div
          className={`${color} h-3 rounded-full relative overflow-hidden`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, delay, type: "spring" }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse-slow"></div>
        </motion.div>
      </div>
    </motion.div>
  );
} 