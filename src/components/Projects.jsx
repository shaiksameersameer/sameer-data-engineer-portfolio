import React from "react";

const projects = [
  {
    number: "01",
    title: "AWS ETL Pipeline",
    repo: "aws-etl-glue-redshift-quicksight",
    tech: ["AWS Glue", "Redshift", "Airflow", "PySpark"],
    description:
      "Built an end-to-end ETL pipeline processing 100k+ records from S3 → Glue → Redshift. Automated workflows using Apache Airflow and optimized PySpark transformations for analytics.",
    github: "https://github.com/shaiksameersameer/aws-etl-glue-redshift-quicksight",
  },
  {
    number: "02",
    title: "YouTube Analytics Pipeline",
    repo: "youtube-etl-pipeline",
    tech: ["PySpark", "AWS S3", "Glue", "Airflow"],
    description:
      "Built a YouTube analytics pipeline to process engagement datasets using PySpark. Automated ingestion and transformation workflows using Airflow and stored curated datasets in Amazon S3.",
    github: "https://github.com/shaiksameersameer/youtube-etl-pipeline",
  },
  {
    number: "03",
    title: "Flight Data ETL Pipeline",
    repo: "airflow-spark-flights-etl",
    tech: ["PySpark", "Airflow", "AWS S3"],
    description:
      "Designed and implemented a batch ETL pipeline using PySpark and Apache Airflow. Processed flight datasets and generated structured outputs for analytics and reporting.",
    github: "https://github.com/shaiksameersameer/airflow-spark-flights-etl",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-white py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-red-500 font-bold uppercase tracking-widest">
            Data Engineer
          </span>

          <h2 className="text-5xl font-black text-gray-900 mt-4 mb-4">
            Featured Projects
          </h2>

          <p className="text-gray-600 text-lg">
            Building Scalable Data Pipelines with AWS, PySpark and Apache Airflow
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Number */}
              <span className="text-red-500 text-xl font-black">
                {project.number}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold mt-3 mb-2 text-gray-900">
                {project.title}
              </h3>

              {/* Repo */}
              <p className="text-sm text-gray-500 mb-4">
                {project.repo}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-3 rounded-full bg-black text-white font-semibold hover:bg-red-500 transition-all duration-300"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;