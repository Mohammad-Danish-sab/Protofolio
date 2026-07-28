import { FolderKanban, FileText, Code2, Briefcase, Mail } from "lucide-react";

import DashboardCard from "./DashboardCard";

export default function StatsGrid({ stats = {} }) {
  const cards = [
    {
      title: "Projects",
      value: stats.projects || 0,
      icon: FolderKanban,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      title: "Blogs",
      value: stats.blogs || 0,
      icon: FileText,
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      title: "Skills",
      value: stats.skills || 0,
      icon: Code2,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      title: "Services",
      value: stats.services || 0,
      icon: Briefcase,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
    },
    {
      title: "Messages",
      value: stats.contacts || 0,
      icon: Mail,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
      {cards.map((card) => (
        <DashboardCard
          key={card.title}
          title={card.title}
          value={card.value}
          icon={card.icon}
          color={card.color}
          bg={card.bg}
        />
      ))}
    </div>
  );
}
