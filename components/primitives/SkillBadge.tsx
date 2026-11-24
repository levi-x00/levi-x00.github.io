"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SkillBadgeProps {
  skillName: string;
  iconifyTag: string;
}

export function SkillBadge({ skillName, iconifyTag }: SkillBadgeProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="inline-flex items-center gap-3 border border-terminal-border bg-terminal-surface py-1.5 pl-1.5 pr-4 font-body text-sm text-terminal-text transition-colors duration-200 hover:border-terminal-signal hover:bg-terminal-signal/10 hover:text-terminal-signal"
        >
          <span className="flex h-8 w-8 items-center justify-center bg-terminal-text/90 text-terminal-bg">
            <Icon icon={iconifyTag} width={22} height={22} aria-hidden />
          </span>
          {skillName}
        </motion.span>
      </TooltipTrigger>
      <TooltipContent>{skillName}</TooltipContent>
    </Tooltip>
  );
}
