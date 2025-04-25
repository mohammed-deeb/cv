'use client'

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Role {
  role: string;
  description: string;
}

interface Position {
  title: string;
  datefromto: string;
  roles: Role[];
}

interface Experience {
  id: number;
  company: string;
  location: string;
  positions: Position[];
}

const Experience = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchExperiences() {
      try {
        const { data, error } = await supabase
          .from('experience')
          .select('*')
          .order('id', { ascending: false });

        if (error) {
          throw error;
        }

        setExperiences(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch experience data');
      } finally {
        setLoading(false);
      }
    }

    fetchExperiences();
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-6"></div>
          <div className="space-y-6">
            {[1, 2].map((i) => (
              <div key={i} className="space-y-4">
                <div className="h-6 bg-gray-100 dark:bg-gray-800 rounded w-3/4"></div>
                <div className="h-24 bg-gray-100 dark:bg-gray-800 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-red-500 dark:text-red-400">
          Error loading experience data: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-[#ffffffcf] mb-6">Experience</h1>
      <div className="bg-white dark:bg-[#191919] rounded-lg shadow-lg p-6">
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="space-y-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {exp.company}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">{exp.location}</p>
                </div>
              </div>

              {exp.positions.map((position, posIndex) => (
                <div key={posIndex} className="border-l-4 border-blue-500 pl-4 ml-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      {position.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{position.datefromto}</p>
                  </div>
                  <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                    {position.roles.map((roleItem, roleIndex) => (
                      <li key={roleIndex} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          <span className="font-semibold">{roleItem.role}:</span>{' '}
                          {roleItem.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 