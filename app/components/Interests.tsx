import React from "react";

const Interests = () => {
  const interests = [
    {
      category: "AI",
      items: [
        "Large Language Models (LLMs)",
        "AI Agents"
      ]
    },
    {
      category: "Development",
      items: [
        "MLOps",
        "Docker & Kubernetes"
      ]
    },
    {
      category: "Deployment",
      items: [
        "Amazon Web Services (AWS)",
        "Google Cloud Platform (GCP)",
        "Microsoft Azure (Azure)"
      ]
    },
    {
      category: "Challenges",
      items: [
        "Reaching the Grandmaster status in the Kaggle Scientific competitions"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-[#ffffffcf] mb-6">Interests</h1>
      <div className="bg-white dark:bg-[#191919] rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interests.map((interest, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{interest.category}</h2>
              <ul className="space-y-2">
                {interest.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2 mt-1"></span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interests; 