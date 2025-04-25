'use client'

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Education {
  id: number;
  university: string;
  collegedegree: string;
  location: string;
  datefromto: string;
  gpa: string;
}

const Education = () => {
  const [educationData, setEducationData] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEducation() {
      try {
        const { data, error } = await supabase
          .from('education')
          .select('*')
          .order('id', { ascending: false }); // Assuming newest education should be first

        if (error) {
          throw error;
        }

        setEducationData(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch education data');
      } finally {
        setLoading(false);
      }
    }

    fetchEducation();
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-6"></div>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="h-32 bg-gray-100 dark:bg-gray-800 rounded"></div>
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
          Error loading education data: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-[#ffffffcf] mb-6">Education</h1>
      <div className="bg-white dark:bg-[#191919] rounded-lg shadow-lg p-6">
        <div className="space-y-6">
          {educationData.map((edu) => (
            <div key={edu.id} id={edu.id.toString()} className="border-l-4 border-blue-500 pl-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {edu.university}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    {edu.collegedegree}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    GPA: {edu.gpa}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.location}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.datefromto}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education; 