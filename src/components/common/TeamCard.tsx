import React from "react";
import { TeamMember } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <Card className="flex flex-col items-center text-center p-6 h-full justify-between">
      <div className="flex flex-col items-center w-full">
        <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden ring-4 ring-blue-100 dark:ring-blue-900/40 shadow-inner">
          <Image
            src={member.avatarUrl}
            alt={member.name}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>

        <Badge variant="outline" className="mb-2 text-[11px]">
          {member.department}
        </Badge>

        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
          {member.name}
        </h4>

        <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5 mb-3">
          {member.role}
        </p>

        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
          {member.bio}
        </p>
      </div>

      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100 dark:border-gray-800 w-full justify-center text-gray-400">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
            aria-label={`LinkedIn profil ${member.name}`}
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.72a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
            </svg>
          </a>
        )}
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={`GitHub profil ${member.name}`}
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
              />
            </svg>
          </a>
        )}
      </div>
    </Card>
  );
};
