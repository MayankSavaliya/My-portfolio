"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface AchievementCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
  index: number;
}

export function AchievementCard({
  title,
  subtitle,
  description,
  icon,
  iconColor,
  index,
}: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, type: "spring" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, rotateX: 2, rotateY: index % 2 === 0 ? -2 : 2 }}
      className="perspective-1000"
    >
      <Card className="glass-card hover:animate-glow transition-all duration-500 transform-3d card-3d border border-white/10 dark:border-slate-700/20">
        <CardContent className="p-6 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500"></div>
          <div className="flex items-center mb-4">
            <motion.div 
              className={`w-12 h-12 ${iconColor} rounded-full flex items-center justify-center mr-4 transform-3d`}
              whileHover={{ rotateZ: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-white drop-shadow-lg">
                {icon}
              </div>
            </motion.div>
            <div>
              <h4 className="font-bold gradient-text">{title}</h4>
              <p className="text-muted-foreground text-sm">{subtitle}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-tl-full"></div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 