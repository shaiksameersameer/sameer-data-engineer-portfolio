import React from "react";

const skillCategories = [
{
    title: "Programming",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      "ETL Pipelines",
      "PySpark",
      "Apache Airflow",
      "Data Warehousing",
      "Data Modeling",
    ],
  },
  {
    title: "AWS Cloud",
    skills: [
      "AWS S3",
      "AWS Glue",
      "Amazon Redshift",
      "AWS Athena",
      "Amazon QuickSight",
      "IAM",
    ],
  },
  {
  title: "Databases",
  skills: [
    "SQL",
    "MySQL",
    "Amazon Redshift",
  ],
},

  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "VS Code",
      "Jupyter Notebook",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#f8f8f8] py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-red-500 font-bold uppercase tracking-widest">
            Technical Skills
          </span>

          <h2 className="text-5xl font-black text-gray-900 mt-4 mb-4">
            Skills & Technologies
          </h2>

          <p className="text-gray-600 text-lg">
            Technologies and tools I use to build scalable data solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-red-100 text-red-600 font-semibold text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;