'use client'

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Publication {
  id: number;
  authors: string;
  pub_year: string;
  title: string;
  pub_type: string;
  web_link: string;
}

const Publications = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPublications() {
      try {
        const { data, error } = await supabase
          .from('publications')
          .select('*')
          .order('id', { ascending: false }); // Most recent publications first

        if (error) {
          throw error;
        }

        setPublications(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch publications');
      } finally {
        setLoading(false);
      }
    }

    fetchPublications();
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-6"></div>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="h-24 bg-gray-100 dark:bg-gray-800 rounded"></div>
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
          Error loading publications: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-[#ffffffcf] mb-6">Publications</h1>
      <div className="bg-white dark:bg-[#191919] rounded-lg shadow-lg p-6">
        <div className="space-y-6">
          {publications.map((pub) => (
            <div key={pub.id} className="border-l-4 border-blue-500 pl-4">
              <p className="text-gray-800 dark:text-gray-200">
                {pub.authors}, ({pub.pub_year}). <span className="font-semibold">{pub.title}</span>
                {pub.pub_type && `. ${pub.pub_type}`}.
              </p>
              {pub.web_link && (
                <a 
                  href={pub.web_link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm mt-1 inline-block"
                >
                  View Publication
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications; 