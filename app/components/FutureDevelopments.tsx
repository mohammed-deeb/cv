import React from "react";

const FutureDevelopments = () => {
  const goals = [
    {
      category: "Professional Goals",
      items: [
        "Develop expertise in advanced machine learning techniques",
        "Contribute to open-source AI projects",
        "Publish research in top-tier conferences",
        "Lead innovative tech projects"
      ]
    },
    {
      category: "Learning Objectives",
      items: [
        "Master deep learning frameworks",
        "Learn cloud architecture",
        "Improve system design skills",
        "Study advanced algorithms"
      ]
    },
    {
      category: "Personal Development",
      items: [
        "Enhance leadership skills",
        "Improve public speaking",
        "Build professional network",
        "Work with great talented developers and researchers"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-[#ffffffcf] mb-6">Future Developments</h1>
      <div className="bg-white dark:bg-[#191919] rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {goals.map((goal, index) => (
            <div key={index} className="border dark:border-gray-700 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-[#ffffffcf] mb-3">{goal.category}</h2>
              <ul className="space-y-2">
                {goal.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mr-2"></span>
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

export default FutureDevelopments; 